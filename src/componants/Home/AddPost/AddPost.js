import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const AddPost = () => {
    const [loggingUser, setLoggingUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const postData = new FormData();
        postData.append("img", data.postImage[0])
        postData.append("postDetails", data.postDetails)
        postData.append("userName", loggingUser.displayName)
        postData.append("userImg", loggingUser.photoURL)
        axios.post('http://localhost:5000/post', postData)
            .then(function (response) {
                document.getElementById("post").reset();
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <form id="post" onSubmit={handleSubmit(onSubmit)} style={{ width: "545px", margin: "20px 0px" }} action="">
            <div class="col-md-12">
                <textarea {...register("postDetails", { required: true })} name="postDetails" type="text" class="form-control" id="formGroupExampleInput" placeholder="Post"></textarea>
            </div>
            <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupFile01">Upload</label>
                <input {...register("postImage")} name="postImage" type="file" class="form-control" id="inputGroupFile01" />
            </div>
            <button className="btn btn-primary"> Post</button>
        </form>
    );
};

export default AddPost;