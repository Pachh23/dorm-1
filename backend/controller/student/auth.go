
package student

import (
	"net/http"

	"example.com/dorm-1-example/config"
	"example.com/dorm-1-example/entity"
	"example.com/dorm-1-example/services"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)


type StudentAuthen struct {
	StudentID string `json:"student_id"`
	Password  string `json:"password"`
}

// ส่วนของ student
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

