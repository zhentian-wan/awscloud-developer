import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
import { Optional } from "sequelize";

interface IFeedItem {
  id?: number;
  caption: string;
  url: string;
  createdAt?: Date;
  updatedAt?: Date;
}
@Table
export class FeedItem extends Model<IFeedItem> {
  @Column
  public caption: string;

  @Column
  public url: string;

  @Column
  @CreatedAt
  public createdAt: Date = new Date();

  @Column
  @UpdatedAt
  public updatedAt: Date = new Date();
}
