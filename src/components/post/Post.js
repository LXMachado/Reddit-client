import React from "react";
import ReactMarkdown from "react-markdown";
import { gfm } from "remark-gfm";
import { kformatter, utcTimeConverter } from "../../app/helpers/helpers";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import { selectPost } from "../comments/commentsSlice";
import { Container } from "@mui/material";

export default function POST() {
  const post = useSelector(selectPost);
  const {
    author,
    created_utc,
    title,
    selftext,
    score,
    url_overridden_by_dest,
  } = post;

  return (
    <Container className="post">
      <header>
        <aside className="post-aside">
          <Typography variant="h3" component="span">
            {kformatter(score)}
          </Typography>
        </aside>
        <div>
          <Typography variant="h6" gutterBottom>
            Posted by {author}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Posted {utcTimeConverter(created_utc)}
          </Typography>
          <Typography variant="h4" component="h1" gutterBottom>
            {title}
          </Typography>
        </div>
      </header>

      <Typography variant="body1" component="p" gutterBottom>
        <a href={url_overridden_by_dest}>{url_overridden_by_dest}</a>
      </Typography>

      <ReactMarkdown remarkPlugins={gfm} children={selftext} />
    </Container>
  );
}
