import { IStrategyBD } from "../Interfaces/BD.Interface";

export class StrategySQL implements IStrategyBD {
  connectBD(url: string): string {
    return 'SQL CONNECTED'
  }

  disconnectBD(): string {
    return 'SQL DISCONNECTED'
  }
}