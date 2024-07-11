import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  service: [],
  loading: true,
  error: false,
};

export const fetchContact = createAsyncThunk("getcontact", async () => {
  try {
    const res = await axios.get("http://localhost:7001/api/contact/getcontact");
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
});

export const SearchContact = createAsyncThunk("searchcontact", async (payload) => {
  try {
    const result = await axios.get(`http://localhost:7001/api/contact/search/${payload}`);
    console.log(result.data);
    return result.data;
  } catch (error) {
    throw error;
  }
});

export const contactSlice = createSlice({
  name: "contactData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.loading = false;
        state.service=action.payload;
      })
      .addCase(fetchContact.rejected, (state, action) => {
        state.error = true;
      })
      .addCase(SearchContact.fulfilled, (state, action) => {
        state.loading = false;
        state.service=action.payload;
      })
  },
});

export default contactSlice.reducer;
