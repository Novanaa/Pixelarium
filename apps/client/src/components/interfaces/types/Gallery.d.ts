import Picture from "./Picture";

export default interface Gallery {
  id: number;
  user_id: number;
  createdAt: Date;
  updatedAt: Date;
  pictures: Array<Picture>;
}
