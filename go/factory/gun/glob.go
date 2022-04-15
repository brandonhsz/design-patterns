package gun

type glub struct {
	gun
}

func newGlub() igun {
	return &glub{
		gun: gun{
			name:  "GLUB",
			power: 100,
		},
	}
}
