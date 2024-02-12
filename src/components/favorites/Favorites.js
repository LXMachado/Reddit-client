import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { selectFavorites } from "./favoritesSlice";
import Container from "@mui/material/Container";
import "./Favorites.css";

export default function Favorites() {
  const favorites = useSelector(selectFavorites);

  return (
    <Container>
      <Box maxWidth="md" className="favorites-container">
        <List>
          {favorites.map((favorite) => {
            const { subreddit, icon_img } = favorite;
            return (
              <ListItemButton
                key={subreddit}
                component={Link}
                to={`/r/${subreddit}`}
                className="list-item-button"
              >
                <Avatar
                  alt={subreddit}
                  src={icon_img}
                  className="avatar"
                />
                <ListItemText primary={`r/${subreddit}`} />
              </ListItemButton>
            );
          })}
        </List>
      </Box>
    </Container>
  );
}
