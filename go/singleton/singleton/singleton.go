package singleton

var instance *singleton

type singleton struct {
	instance *singleton
	Name     string
	Age      int
}

func GetInstance(name string, age int) *singleton {
	if instance == nil {
		instance = &singleton{
			Name: name,
			Age:  age,
		}
	}

	return instance
}
