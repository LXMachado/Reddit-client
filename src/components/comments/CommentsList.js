import React from "react";
import { useSelector } from "react-redux";
import { selectComments } from "./commentsSlice";
import Comment from "./Comment";
import { Paper } from "@material-ui/core";


export default function CommentsList() {
  const comments = useSelector(selectComments);

  return (
    <Paper>
      {comments.map((comment, index) => {
        return <Comment data={comment.data} key={index} />;
      })}
    </Paper>
  );
}
