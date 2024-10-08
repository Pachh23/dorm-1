package entity

import "gorm.io/gorm"

type Family struct {
	gorm.Model
	FathersName        string  `json:"fathers_name"`
	MathersName        string  `json:"mathers_name"`
	OccupationFather   string  `json:"occupation_father"`
	OccupationMather   string  `json:"occupation_mather"`
	PhoneFather        string  `json:"phone_father"`
	PhoneMather        string  `json:"phone_mather"`
	OrGuardiansName    *string `json:"or_guardians_name"`
	Relationship       *string `json:"relationship"`
	OccupationGuardian *string `json:"occupation_guardian"`
	PhoneGuardian      *string `json:"phone_guardian"`

	GuardiansID uint       `json:"guardian_id"`
	Guardian    *Guardians `gorm:"foreignKey: GuardiansID" json:"guardian"`

	FamilyStatusID uint            `json:"family_status_id"`
	FamilyStatus   *FamilyStatuses `gorm:"foreignKey: FamilyStatusID" json:"family_status"`
}
