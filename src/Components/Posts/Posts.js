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

const Posts = (props) => {
 


  return (
    <>
<div>{props.post.text}</div>
    </>
  );
};

export default Posts;
