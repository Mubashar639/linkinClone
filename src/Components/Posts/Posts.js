import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostsMiddleware } from "../../Store/Middleware";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => ({
    posts: state.PostsReducer.posts
  }));

  console.log("My Posts on the way ???", posts);

  useEffect(() => {
    dispatch(PostsMiddleware.getAllPosts());
  }, [dispatch]);

  return (
    <>
      hello
    </>
  );
};

export default Posts;
