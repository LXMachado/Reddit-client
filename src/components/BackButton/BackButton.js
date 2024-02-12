import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { makeStyles } from "@material-ui/core/styles";

export default function BackButton() {
  let history = useHistory();

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <Button
        onClick={history.goBack}
        startIcon={<KeyboardBackspaceIcon />}
        className={classes.button}
        variant="contained"
      >
        GO BACK
      </Button>
    </div>
  );
}
