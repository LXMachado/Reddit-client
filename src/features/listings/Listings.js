import React, { useEffect } from "react";
import Listing from "../listing/Listing";
import { useSelector, useDispatch } from "react-redux";
import {
  selectListings,
  changeSubreddit,
  loadListingsBySubreddit,
  selectIsLoading,
  loadListingsBySearch,
} from "./listingsSlice";
import { Link, useLocation, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

export default function Listings() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const listings = useSelector(selectListings);
  let { subreddit } = useParams();
  let { search } = useLocation();

  subreddit = subreddit ? subreddit : "popular";

  useEffect(() => {
    if (search) {
      dispatch(loadListingsBySearch(search.substring(3)));
    }

    dispatch(changeSubreddit(subreddit));
    dispatch(loadListingsBySubreddit(subreddit));
  }, [subreddit, dispatch, search]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      {listings.map((listing) => {
        return (
          <Link
            to={`/r/${listing.subreddit}/comments/${listing.id}`}
            className="text-link"
            key={listing.id}
          >
            <Listing data={listing} key={listing.id} />
          </Link>
        );
      })}
    </div>
  );
}
