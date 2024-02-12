import { configureStore } from "@reduxjs/toolkit";
import listingsReducer from "../features/listings/listingsSlice";
import favoritesReducer from "../components/favorites/favoritesSlice";
import commentsReducer from "../components/comments/commentsSlice";

export default configureStore({
  reducer: {
    listings: listingsReducer,
    favorites: favoritesReducer,
    comments: commentsReducer,
  },
});
