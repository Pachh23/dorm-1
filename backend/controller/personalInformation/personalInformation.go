package personalinformation

import (
	"net/http"

	"example.com/dorm-1-example/config"
	"example.com/dorm-1-example/entity"
	"github.com/gin-gonic/gin"
)

func GetAll(c *gin.Context) {
	var personalInformations []entity.PersonalInformation
	db := config.DB()
	results := db.Preload("Gender").Find(&personalInformations)
	if results.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": results.Error.Error()})
		return
	}
	c.JSON(http.StatusOK, personalInformations)
}

func Get(c *gin.Context) {
	ID := c.Param("id")
	var personalInformation entity.PersonalInformation
	db := config.DB()
	results := db.Preload("Gender").First(&personalInformation, ID)
	if results.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": results.Error.Error()})
		return
	}
	if personalInformation.ID == 0 {
		c.JSON(http.StatusNoContent, gin.H{})
		return
	}
	c.JSON(http.StatusOK, personalInformation)
}

func Update(c *gin.Context) {
	var personalInformation entity.PersonalInformation
	PersonalInformationID := c.Param("id")
	db := config.DB()
	result := db.First(&personalInformation, PersonalInformationID)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "id not found"})
		return
	}
	if err := c.ShouldBindJSON(&personalInformation); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request, unable to map payload"})
		return
	}
	result = db.Save(&personalInformation)
	if result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Updated successful"})
}

func Delete(c *gin.Context) {
	id := c.Param("id")
	db := config.DB()
	if tx := db.Exec("DELETE FROM families WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "id not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Deleted successful"})
}
