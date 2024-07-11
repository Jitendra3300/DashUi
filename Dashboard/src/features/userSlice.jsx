import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  datas: [],
  loading: true,
  error: false,
};

export const fetchUser = createAsyncThunk("userlist", async () => {
  try {
    const res = await axios.get("http://localhost:7001/api/auth/userlist");
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
});

export const searchUser = createAsyncThunk("search", async (payload) => {
  try {
    const result = await axios.get(`http://localhost:7001/api/auth/search/${payload}`);
    console.log(result.data);
    return result.data;
  } catch (error) {
    throw error;
  }
});

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.datas=action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.error = true;
      })
      .addCase(searchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.datas=action.payload;
      })
      
  },
});

export default userSlice.reducer;
