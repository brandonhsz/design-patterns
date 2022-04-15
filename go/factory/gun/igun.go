package gun

type igun interface {
	setName(name string)
	setPower(power int)
	getName() string
	getPower() int
}
