import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  favorites: [
    {
      subreddit: "australia",
      icon_img:
        "https://styles.redditmedia.com/t5_2qmdy/styles/communityIcon_mp4kplad3rj91.png?width=256&s=26a86e62279ca6e5f8a67d93272d126e36d0b1ce",
    },
    {
      subreddit: "Javascript",
      icon_img:
        "https://a.thumbs.redditmedia.com/zDOFJTXd6fmlD58VDGypiV94Leflz11woxmgbGY6p_4.png",
    },
    {
      subreddit: "React",
      icon_img:
        "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png?width=256&s=3f7493995143d3cf40b1fedc582607cea194b579",
    },
    {
      subreddit: "ufc",
      icon_img:
        "https://styles.redditmedia.com/t5_2qsev/styles/communityIcon_eq9p1oy6w8r51.png?width=256&s=aecfefe7209f60287c4a35ebcff9f00b6494036e",
    },
    {
      subreddit: "Music",
      icon_img:
        "https://styles.redditmedia.com/t5_2qh1u/styles/communityIcon_21ykcg22rm6c1.png?width=256&s=47be9b2c875bb6f1752620f58e9ac7efdb9efbf0",
    },
    {
      subreddit: "Midjourney",
      icon_img:
        "https://styles.redditmedia.com/t5_5zvcfk/styles/communityIcon_zy03g6nwnyf91.png",
    },
    {
      subreddit: "science",
      icon_img:
        "https://styles.redditmedia.com/t5_mouw/styles/communityIcon_xtjipkhhefi41.png?width=256&s=23dbd8fcbd7c632995ddc63929abe0c2ce3b8b4d",
    },
    {
      subreddit: "technology",
      icon_img:
        "https://b.thumbs.redditmedia.com/J_fCwTYJkoM-way-eaOHv8AOHoF_jNXNqOvPrQ7bINY.png",
    },
    {
      subreddit: "perplexity_ai",
      icon_img:
        "https://styles.redditmedia.com/t5_7qnoi9/styles/communityIcon_0zx2forco34c1.png?width=256&s=d81d10eb3755151166c52dd9787d3d4e3d3b583d",
    },
    // Add more favorite subreddits as needed...
  ],
  loading: false,
  error: null,
};

// Create a slice
export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.loading = false;
        state.favorites = action.payload;
      })
      .addCase(getFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Define an async thunk to fetch subreddit data
export const getFavorites = createAsyncThunk(
  "favorites/getFavorites",
  async (favorite, thunkAPI) => {
    try {
      const subreddit = favorite.subreddit;
      const response = await fetch(`https://www.reddit.com/r/${subreddit}/.json`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Export the async thunk for use in your components
export const selectFavorites = (state) => state.favorites.favorites;

export default favoritesSlice.reducer;
