import { PostsActions } from "../Actions";

function PostsReducer(
  state = {
    posts: {}
  },
  action
) {
  console.log("PostsActions >>>", action.data);
  console.log("PostsActions type", action.type);

  switch (action.type) {
    case PostsActions.GET_POSTS:
      return {
        ...state
      };
    case PostsActions.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.data
      };
    default:
      return state;
  }
}

export default PostsReducer;
