package entity

import "gorm.io/gorm"

type Address struct {
	gorm.Model
	HouseNo     string `json:"house_no"`
	VillageNo   string `json:"village_no"`
	Village     string `json:"village"`
	Alley       string `json:"alley"`
	Road        string `json:"road"`
	SubDistrict string `json:"sub_district"`
	District    string `json:"district"`
	Province    string `json:"province"`
	PostCode    string `json:"post_code"`
}
