import mongoose, {Schema} from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    datepublished: {
        type: String,
        // required: true
    },
    category: {
        type: String,
        required: true
    },
    links: [{
        type: String
    }],
    thumbnail: {
        type: String,
        // required: true`
    }
});
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);


export default Post;