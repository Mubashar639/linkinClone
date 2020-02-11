import { getPosts } from "../../Services/api";
import { PostsActions } from "../Actions";

class PostsMiddleware {
  static getAllPosts = () => {
    return dispatch => {
      dispatch(PostsActions.getAllPost());
      getPosts()
        .then(dispatch(PostsActions.getAllPostSuccess()))
        .catch(error => {
          dispatch(PostsActions.getAllPostError(error));
        });
    };
  };
}
// static getAllPosts = data => {
//   return dispatch => {
//     console.log("Get Posts", data);
//     dispatch(PostsActions.getAllPost(data));
//     getPosts(data)
//       .then((data) => {
//         console.log("DATA POST >>", data)
//         dispatch(PostsActions.getAllPostSuccess(data));
//       })
//       .catch(err => {
//         console.log("ERROR >>", err);
//       });
//   };
// };

export default PostsMiddleware;
