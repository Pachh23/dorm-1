package familystatus

import (
	"net/http"

	"example.com/dorm-1-example/config"
	"example.com/dorm-1-example/entity"
	"github.com/gin-gonic/gin"
)

func GetAll(c *gin.Context) {
	db := config.DB()
	var familyStatus []entity.FamilyStatuses
	db.Find(&familyStatus)
	c.JSON(http.StatusOK, &familyStatus)
}
