package main

import (
	"fmt"
	"main/strategy"
)

func main() {

	a := strategy.Server{}
	a.SetStrategy(&strategy.MongoDB{})

	v1 := a.ConnectBD()
	v2 := a.DisconnectBD()

	a.SetStrategy(&strategy.SqlDB{})

	v3 := a.ConnectBD()
	v4 := a.DisconnectBD()

	fmt.Printf("%s\n%s\n%s\n%s\n", v1, v2, v3, v4)

}
