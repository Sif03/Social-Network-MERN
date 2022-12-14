import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "../../features/posts/postsSlice";
import "./PostDetail.scss";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPostById(id));
  }, []);

  if (post && post.userId) {
    return (
      <div className="container-top">
        <h1>Post Detail</h1>
        <p>Post Id : {post.userId._id}</p>
        <p>
          Author: {post.userId.first_name} {post.userId.last_name}{" "}
        </p>
        <p>Title: {post.title} Body: {post.body }</p>
     
        <p>Country : {post.userId.country}</p>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default PostDetail;
