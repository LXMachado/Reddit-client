import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SearchBar from "../components/SearchBar/SearchBar";
import Favorites from "../components/favorites/Favorites";
import Listings from "../features/listings/Listings";
import Comments from "../components/comments/Comments";
import "./App.css";
import { IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <Typography variant="h1" style={{ color: "red" }}>
            Reddish
          </Typography>
        </Grid>
      </Grid>
      <Router>
        <div className="App">
          <Container>
            <div className="top-section">
              <SearchBar />
              <Favorites sub="popular" />
            </div>
            <Grid container spacing={2}>
              <Switch>
                <Route exact path="/" component={Listings} />
                <Route exact path="/r/:subreddit" component={Listings} />
                <Route path="/search" component={Listings} />
                <Route path="/r/:subreddit/comments/:id" component={Comments} />
              </Switch>
            </Grid>
            <Container>
            <Typography variant="h6">Follow Me</Typography>
          <IconButton color="inherit" href="https://www.linkedin.com/in/alexandre-da-silva-machado-664884249/" target="_blank"><LinkedInIcon /></IconButton>
          <IconButton color="inherit" href="https://github.com/LXMachado" target="_blank"><GitHubIcon /></IconButton>
            </Container>
          </Container>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;