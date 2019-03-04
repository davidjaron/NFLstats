import {Topic} from './topic';

export class User {
  id: Number;
  firstName: String;
  lastName: String;
  username: String;
  password: String;
  verifyPassword: String;
  city: String;
  state: String;
  userType: String;
  topic: Topic[];
}
