import React from "react";
import { utcTimeConverter, kformatter } from "../../app/helpers/helpers";
import ReactMarkdown from "react-markdown";
import { gfm } from "remark-gfm";
import { Button, Container } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

export default function Comment(props) {
  const { author, ups, created_utc, body } = props.data;

  return (
    <Container className="comment-container"> {/* Add Paper component */}
      <div className="comment">
        <header>
          <h2>{author}</h2>
          <h3>{utcTimeConverter(created_utc)}</h3>
        </header>

        <main>
          <ReactMarkdown remarkPlugins={gfm} children={body} />
        </main>

        <footer>
          <Button
            onClick={props.handleUpvote}
            endIcon={<ThumbUpIcon />}
            variant="contained"
            size="medium"
          >
            {kformatter(ups)}
          </Button>
        </footer>
      </div>
    </Container>
  );
}
