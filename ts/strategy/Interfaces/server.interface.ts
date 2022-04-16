import { IStrategyBD } from "./BD.Interface"

export interface IServer {

  strategyBD: IStrategyBD

  connectBD(): string
  disconnectBD(): string
}