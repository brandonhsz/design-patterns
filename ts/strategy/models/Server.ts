import { IStrategyBD } from "../Interfaces/BD.Interface";
import { IServer } from "../Interfaces/server.interface";

export class Server implements IServer {

  strategyBD: IStrategyBD

  constructor(strategyBD: IStrategyBD) {
    this.strategyBD = strategyBD
  }

  setStrategy(strategyBD: IStrategyBD) {
    this.strategyBD = strategyBD
  }

  connectBD(): string {
    return this.strategyBD.connectBD("")
  }

  disconnectBD(): string {
    return this.strategyBD.disconnectBD()
  }
}