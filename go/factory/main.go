package main

import (
	"fmt"
	"main/gun"
)

func main() {
  ak47, _ := gun.GunFactory("ak47")
  glob, _ := gun.GunFactory("glob")

  fmt.Printf("La ak47 es %v \n La glob es %v", ak47, glob)
  
}
