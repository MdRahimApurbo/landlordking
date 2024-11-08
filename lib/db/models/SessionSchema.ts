import mongoose from "mongoose";

export interface ISession {
  userId: string;
  sessionId: string;
  expires: Date;
}

const SessionSchema = new mongoose.Schema<ISession>(
  {
    userId: { type: String, required: true },
    sessionId: { type: String, required: true },
    expires: { type: Date, required: true },
  },
  { timestamps: true, versionKey: false }
);

const SessionModel = mongoose.model<ISession>("sessions", SessionSchema);

export default SessionModel;
