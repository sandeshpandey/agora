import mongoose, { Schema, Document } from "mongoose";

//interface for Profile schema
export interface IProfile extends Document {
    name: string;
    age: number;
    email: string;
    bio?: string;
    dob?: Date
}

const ProfileSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        email: { type: String, required: true, unique: true },
        bio: { type: String },
        dob: { type: Date }
    },
    {
        timestamps: true
    }
);

const Profile = mongoose.model<IProfile>("Profile", ProfileSchema);

export default Profile;
