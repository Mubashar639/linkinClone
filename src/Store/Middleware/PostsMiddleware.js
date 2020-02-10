import { getPosts } from "../../Services/api";
import { PostsActions } from "../Actions";

class PostsMiddleware {
  static getAllPosts = data => {
    return dispatch => {
      console.log("Get Posts", data);
      dispatch(PostsActions.getAllPost(data));
      getPosts()
        .then((data) => {
          console.log("DATA POST >>", data)
          dispatch(PostsActions.getAllPostSuccess(data));
        })
        .catch(err => {
          console.log("ERROR >>", err);
        });
    };
  };
}

export default PostsMiddleware;
