import { IStrategyBD } from "../Interfaces/BD.Interface";

export class StrategyMongo implements IStrategyBD {
  connectBD(url: string): string {
    return 'Mongo CONNECTED'
  }

  disconnectBD(): string {
    return 'Mongo DISCONNECTED'
  }
}