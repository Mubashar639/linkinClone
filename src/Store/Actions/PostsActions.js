class PostsActions {
  static GET_POSTS = "GET_POSTS";
  static GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";

  static getAllPost = data => {
    return {
      type: this.GET_POSTS,
      data: data
    };
  };

  static getAllPostSuccess = data => {
    return {
      type: this.GET_POSTS_SUCCESS,
      data: data,
      success: true
    };
  };


}

export default PostsActions;
