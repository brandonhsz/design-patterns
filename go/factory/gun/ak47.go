package gun

type ak47 struct {
	gun
}

func newAk47() igun {
	return &ak47{
		gun: gun{
			name:  "AK47",
			power: 100,
		},
	}
}
