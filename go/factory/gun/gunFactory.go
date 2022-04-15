package gun

import "fmt"

func GunFactory(gunType string) (igun, error) {
	if gunType == "glob" {
		return newGlub(), nil
	} else if gunType == "ak47" {
		return newAk47(), nil
	} else {
		return nil, fmt.Errorf("gun type %s is not supported", gunType)
	}

}
