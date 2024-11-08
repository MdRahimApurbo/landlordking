// import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
// import { Collection } from "mongodb";
// import connectDB from "../db/Config";

// const client = await connectDB();
// const db = client?.db();
// const User = db?.collection("users") as Collection<UserDoc>;
// const Session = db?.collection("sessions") as Collection<SessionDoc>;

// export const adapter = new MongodbAdapter(Session, User);

// interface UserDoc {
//   _id: string;
// }

// interface SessionDoc {
//   _id: string;
//   expires_at: Date;
//   user_id: string;
// }
