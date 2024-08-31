package student

import (
	"errors"
	"net/http"
	"time"

	"example.com/dorm-1-example/config"
	"example.com/dorm-1-example/entity"
	"example.com/dorm-1-example/services"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type (
	StudentAuthen struct {
		StudentID string `json:"student_id"`
		Password  string `json:"password"`
	}
	createStudents struct {
		StudentID string    `json:"student_id"`
		Password  string    `json:"password"`
		FirstName string    `json:"first_name"`
		LastName  string    `json:"last_name"`
		Birthday  time.Time `json:"birthday"`
		Year      uint      `json:"year"`
		Major     string    `json:"major"`
		GenderID  uint      `json:"gender_id"`
	}
)

func CreateStudents(c *gin.Context) {
	var payload createStudents
	// Bind JSON payload to the struct
	if err := c.ShouldBindJSON(&payload); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	db := config.DB()
	var userCheck entity.Student
	// Check if the user with the provided email already exists
	result := db.Where("student_id = ?", payload.StudentID).First(&userCheck)
	if result.Error != nil && !errors.Is(result.Error, gorm.ErrRecordNotFound) {
		// If there's a database error other than "record not found"
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}
	if userCheck.ID != 0 {
		// If the user with the provided email already exists
		c.JSON(http.StatusConflict, gin.H{"error": "StudentID is already registered"})
		return
	}
	// Hash the user's password
	hashedPassword, _ := config.HashPassword(payload.Password)
	// Create a new user
	student := entity.Student{
		StudentID: payload.StudentID,
		FirstName: payload.FirstName, // ตั้งค่าฟิลด์ FirstName
		LastName:  payload.LastName,  // ตั้งค่าฟิลด์ LastName
		Password:  hashedPassword,
		Birthday:  payload.Birthday,
		Year:      payload.Year,
		Major:     payload.Major,
		GenderID:  payload.GenderID,
	}
	// Save the user to the database
	if err := db.Create(&student).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, gin.H{"message": "Created success"})
}

func SignInStudent(c *gin.Context) {
	var payload StudentAuthen
	var student entity.Student
	if err := c.ShouldBindJSON(&payload); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// ค้นหา user ด้วย Username ที่ผู้ใช้กรอกเข้ามา
	if err := config.DB().Raw("SELECT * FROM students WHERE student_id = ?", payload.StudentID).Scan(&student).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// ตรวจสอบรหัสผ่าน
	err := bcrypt.CompareHashAndPassword([]byte(student.Password), []byte(payload.Password))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "password is incerrect"})
		return
	}
	jwtWrapper := services.JwtWrapper{
		SecretKey:       "SvNQpBN8y3qlVrsGAYYWoJJk56LtzFHx",
		Issuer:          "AuthService",
		ExpirationHours: 24,
	}
	signedToken, err := jwtWrapper.GenerateToken(student.StudentID)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "error signing token"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"token_type": "Bearer", "token": signedToken, "id": student.ID})

}
