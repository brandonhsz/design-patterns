package strategy

type SqlDB struct{}

func (s *SqlDB) connect(url string) string {
	return "SQL connected"
}

func (s *SqlDB) disconnect() string {
	return "SQL disconnected"
}
