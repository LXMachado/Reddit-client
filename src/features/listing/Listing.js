import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  kformatter,
  previewText,
  utcTimeConverter,
} from "../../app/helpers/helpers";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button, Paper } from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import { makeStyles } from "@material-ui/core/styles";

export default function Listing(props) {
  const {
    subreddit_name_prefixed,
    title,
    author,
    url,
    selftext,
    score,
    url_overridden_by_dest,
    created_utc,
    body,
  } = props.data;

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  const img = <img src={url} alt="" />;
  const previewUrl = (
    <p>
      <a href={url_overridden_by_dest}>{url_overridden_by_dest}</a>
    </p>
  );

  const preview = (
    <ReactMarkdown
      disallowedElements={["a"]}
      remarkPlugins={[remarkGfm]}
      children={previewText(selftext, 500)}
    />
  );

  return (
    <Paper className="listing">
      <aside>
        <FontAwesomeIcon
          icon={faChevronUp}
          size="2x"
          className="chevron-up"
        />
        <span>{kformatter(score)}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          size="2x"
          className="chevron-down"
        />
      </aside>

      <div>
        <header>
          <h2>{subreddit_name_prefixed}</h2>
          <div>
            <h3>Posted by {author}</h3>
            <h3>{utcTimeConverter(created_utc)}</h3>
          </div>
        </header>

        <main>
          <h1>{title}</h1>
          <ReactMarkdown remarkPlugins={[remarkGfm]} children={body} />

          {selftext && preview}

          {img || previewUrl}
        </main>

        <footer>
          <ReactMarkdown remarkPlugins={[remarkGfm]} children={body} />
          <Button
            endIcon={<CommentIcon />}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Comments
          </Button>

          <Button
            endIcon={<ShareIcon />}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Share
          </Button>
        </footer>
      </div>
    </Paper>
  );
}
