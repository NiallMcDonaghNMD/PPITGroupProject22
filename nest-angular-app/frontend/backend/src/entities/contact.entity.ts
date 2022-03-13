//contact entity that maps to a contact table with in the MySQL database that will hold info about contacts in this application
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  city: string;
}
