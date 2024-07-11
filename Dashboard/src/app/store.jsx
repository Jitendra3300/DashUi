import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import careerSlice from "../features/careerSlice";
import quoteSlice from "../features/quoteslice";
import contactSlice from "../features/contactSlice";


export const store = configureStore({
  reducer: {
    user: userSlice,
    career: careerSlice,
    quote: quoteSlice,
    contact:contactSlice
  },
});
