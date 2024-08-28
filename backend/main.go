package main

import (
	"net/http"

	"example.com/dorm-1-example/config"
	"example.com/dorm-1-example/controller/admin"
	"example.com/dorm-1-example/controller/genders"
	"example.com/dorm-1-example/controller/student"
	"example.com/dorm-1-example/middlewares"
	"github.com/gin-gonic/gin"
)

const PORT = "8000"

func main() {
	// open connection database
	config.ConnectionDB()
	// Generate databases
	config.SetupDatabase()
	r := gin.Default()
	r.Use(CORSMiddleware())
	// Auth Route
	r.POST("/signin-student", student.SignInStudent)
	r.POST("/signin-admin", admin.SignInAdmin)

	router := r.Group("/")
	{
		router.Use(middlewares.Authorizes())
		// User Route
		router.PUT("/student/:id", student.Update)
		router.GET("/students", student.GetAll)
		router.GET("/student/:id", student.Get)
		router.DELETE("/student/:id", student.Delete)
	}
	r.GET("/genders", genders.GetAll)
	r.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "API RUNNING... PORT: %s", PORT)
	})
	// Run the server
	r.Run("localhost:" + PORT)
}
func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	}
}
