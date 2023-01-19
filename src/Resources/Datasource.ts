import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { PatientDetails } from "../Entity/Patient";
import { DiseaseMed } from "../Entity/Disease";
dotenv.config();

export const DBConnections = new DataSource({
  type: "postgres",
  host: "localhost",
  username: "postgres",
  password: "164116",
  port:5432,
  database: "postgres",
  synchronize: true,
  entities: [PatientDetails,DiseaseMed]
});
