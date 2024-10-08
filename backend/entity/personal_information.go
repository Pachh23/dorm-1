package entity

import "gorm.io/gorm"

type PersonalInformation struct {
	gorm.Model
	Nickname    string `json:"nickname"`
	CitizenID   string `json:"citizen_id"`
	Phone       string `json:"phone"`
	Nationality string `json:"nationality"`
	Race        string `json:"race"`
	Religion    string `json:"religion"`
	BloodGroup  string `json:"blood_group"`
	UD          *string `json:"UD"`
}
