package admin

import (
	"net/http"

	"example.com/dorm-1-example/config"
	"example.com/dorm-1-example/entity"
	"github.com/gin-gonic/gin"
)

// GetAllAdmins ดึงข้อมูลทั้งหมดของ Admin
func GetAllAdmins(c *gin.Context) {
	var admins []entity.Admin
	db := config.DB()
	if err := db.Find(&admins).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, admins)
}

// GetAdminByID ดึงข้อมูลของ Admin ตาม ID
func GetAdminByID(c *gin.Context) {
	id := c.Param("id")
	var admin entity.Admin
	db := config.DB()
	if err := db.First(&admin, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Admin not found"})
		return
	}
	c.JSON(http.StatusOK, admin)
}
