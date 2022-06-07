import { v4 as uuidv4 } from "uuid";

class User {
  id?: string;
  username: string;
  email: string;
  password: string;
  create_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { User };
