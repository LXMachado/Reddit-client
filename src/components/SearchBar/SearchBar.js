import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container } from '@mui/material';
import "./SearchBar.css";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${searchTerm}`);
  };

  return ( 
  
      <Container maxWidth="md">
        <Link to="/" className="logo-link">
          <img
            src="/Reddit-Icon.png" 
            alt="Reddit Logo"
            className="logo"
          />
        </Link>
        <Link to="/" className="text-link">
          <span className="title">Reddish</span>
        </Link>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search here"
            value={searchTerm}
            className="text-field"
          />
        </form>
      </Container>
    
  );
}
