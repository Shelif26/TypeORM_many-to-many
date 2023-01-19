import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";

import { DiseaseMed } from "./Disease";

@Entity()
export class PatientDetails {
  @PrimaryGeneratedColumn({
    type: "int",
  })
  id: number;

  @Column({
    type: "varchar",
  })
  PatientName: String;

  @Column({
    type: "varchar",
  })
  email: String;

  @ManyToMany(() => DiseaseMed,{
    cascade: ["insert", 'update'],
    eager: true,
    onDelete: 'CASCADE'
})
  @JoinTable()
  smart_Meds: DiseaseMed[];
}
