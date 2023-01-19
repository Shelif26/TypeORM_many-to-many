import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class DiseaseMed {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Disease: string;

  @Column()
  Medicine: string;
}