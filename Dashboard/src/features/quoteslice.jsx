import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    infos: [],
    loading: true,
    error: false,
  };

  export const fetchQuote = createAsyncThunk("getquotes", async () => {
    try {
      const res = await axios.get("http://localhost:7001/api/admin/getquotes");
     
      return res.data;
    } catch (error) {
      throw error;
    }
  });

  export const SearchQuote = createAsyncThunk("searchquotes", async (payload) => {
    try {
      const result = await axios.get(`http://localhost:7001/api/admin/searchquotes/${payload}`);
     
      return result.data;
    } catch (error) {
      throw error;
    }
  });
  
  export const quoteSlice = createSlice({
    name: "quoteData",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchQuote.fulfilled, (state, action) => {
          state.loading = false;
          state.infos=action.payload


        })
        .addCase(fetchQuote.rejected, (state, action) => {
          console.log('error');
          state.error = true;

        })
        .addCase(SearchQuote.fulfilled, (state, action) => {
          state.loading = false;
          state.infos=action.payload


        })
    },
  });
  
  export default quoteSlice.reducer;