import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCommentsById, selectIsLoading } from "./commentsSlice";
import { useParams } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import Loading from "../Loading/Loading";
import Post from "../post/Post";
import CommentsList from "./CommentsList";
import Paper from "@mui/material/Paper"; // Import Paper component from Material-UI

export default function Comments() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const { subreddit, id } = useParams();

  useEffect(() => {
    const input = { id: id, subreddit: subreddit };
    dispatch(loadCommentsById(input));
  }, [dispatch, id, subreddit]);

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <Paper elevation={3} className="container comments"> {/* Wrap in Paper component */}
      {!loading && <BackButton />}
      {!loading && <Post />}
      {!loading && <CommentsList />}
    </Paper>
  );
}