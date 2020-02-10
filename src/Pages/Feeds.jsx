import React, { useEffect } from "react";
import Posts from "../Components/Posts/Posts";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import { PostsMiddleware } from "../Store/Middleware";

const Feed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PostsMiddleware.getAllPosts());
  }, [dispatch]);

  let posts = useSelector((state=>state.ProfileReducer.posts))

  console.log("=======Get all potsts ======", posts);

  return (
    <Row>
      <Col md={1}></Col>
      <Col md={6}>
        <h2 style={{ margin: "20px 0px" }}>News Feed</h2>
        {posts.map(n => (
          <Posts post={n} />
        ))}
      </Col>
    </Row>
  );
};

export default Feed;
