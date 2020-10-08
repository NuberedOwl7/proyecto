import {Schema, model} from 'mongoose';
import bcript from 'bcrypt';

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
      desciption: {
        type: String,
        required: true,
      },
    last_name: {
        type: String,
        required: true,
      },
      email_address: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      wish_list: {
        type: [Object],
        required: true,
      },

      type_user: {
        type: String,
        required: true,
      },


});

userSchema.pre('save' , (next) => {
    const SALT_WORK_FACTOR = 10
    const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR)
    const hashPass = bcrypt.hashSync(this.password, salt)
    this.password= hashPass;
    next() 
});


export default model("User", userSchema);