package main

import (
	"log"
	"main/singleton"
)

func main() {
	sing := singleton.GetInstance("John", 25)
	sing2 := singleton.GetInstance("Brandon", 20)

	if sing == sing2 {
		log.Printf("Singleton 1 and Singleton 2 are the same instance")
	} else {
		log.Printf("Singleton 1 and Singleton 2 are not the same instance")
	}
}
