import {Schema, model} from 'mongoose';
 

const branchSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
      desciption: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      product: {
        type: [Object],
        required: true,
      },
})

export default model("Branch", branchSchema);

