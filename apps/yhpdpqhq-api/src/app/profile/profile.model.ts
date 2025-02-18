import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class Profile extends Model {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  team: string;
}
