import mongoose from "mongoose";

const connectionsSchema = new mongoose.Schema({
    from_user_id: {type: String, ref: 'User', required: true},
    to_user_id: {type: String, ref: 'User', required: true},
    status: {type: String, enum: ['pending', 'accepted'], default: 'pending'},
},{timestamps: true})

const Connection = mongoose.model('Connection', connectionsSchema)

export default Connection