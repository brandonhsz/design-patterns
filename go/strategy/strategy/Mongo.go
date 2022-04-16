package strategy

type MongoDB struct{}

func (m *MongoDB) connect(url string) string {
	return "Mongo connected"
}

func (m *MongoDB) disconnect() string {
	return "Mongo disconnected"
}
