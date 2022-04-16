export interface IStrategyBD {
  connectBD(url: string): string
  disconnectBD(): string
}