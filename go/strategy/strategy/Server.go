package strategy

type Strategy interface {
	connect(url string) string
	disconnect() string
}

type Server struct {
	strategy Strategy
}

func (s *Server) SetStrategy(strategy Strategy) {
	s.strategy = strategy
}

func (s *Server) ConnectBD() string {
	return s.strategy.connect("")
}

func (s *Server) DisconnectBD() string {
	return s.strategy.disconnect()
}
