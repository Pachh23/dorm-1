package entity

import (
	"time"

	"gorm.io/gorm"
)

type Student struct {
	gorm.Model
	StudentID string    `json:"student_id"`
	Password  string    `json:"password"`
	FirstName string    `json:"first_name"`
	LastName  string    `json:"last_name"`
	Birthday  time.Time `json:"birthday"`
	Year      uint      `json:"year"`
	Major     string    `json:"major"`

	GenderID uint     `json:"gender_id"`
	Gender   *Genders `gorm:"foreignKey: gender_id" json:"gender"`

	// One-to-one relationship with Address
	AddressID uint
	Address   Address `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`

	// One-to-one relationship with Family
	FamilyID uint
	Family   Family `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`

	// One-to-one relationship with OtherInformation
	OtherInformationID uint
	OtherInformation   OtherInformation `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`

	// One-to-one relationship with PersonalInformation
	PersonalInformationID uint
	PersonalInformation   PersonalInformation `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}
