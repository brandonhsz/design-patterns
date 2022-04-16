import { StrategySQL } from "./models/SQL";
import { Server } from "./models/Server";
import { StrategyMongo } from './models/Mongo';

const server = new Server(new StrategySQL());

console.log(server.connectBD());
console.log(server.disconnectBD());

server.setStrategy(new StrategyMongo)

console.log(server.connectBD());
console.log(server.disconnectBD());
