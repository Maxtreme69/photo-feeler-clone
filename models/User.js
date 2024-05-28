import { model, Schema } from 'mongoose';

const userSchema = new Schema({ 
    username: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 16 
    }
 });

 const User = model('user', userSchema, 'users');

 export default User;