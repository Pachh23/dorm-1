package genders

import (
	"net/http"

	"example.com/dorm-1-example/config"
	"example.com/dorm-1-example/entity"
	"github.com/gin-gonic/gin"
)

func GetAll(c *gin.Context) {
	db := config.DB()
	var genders []entity.Genders
	db.Find(&genders)
	c.JSON(http.StatusOK, &genders)
}
