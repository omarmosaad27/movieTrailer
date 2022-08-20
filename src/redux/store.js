import { configureStore } from "@reduxjs/toolkit";
import boxofficeSlice from "./boxofficeSlice";
import searchMoviesSlice from "./searchMoviesSlice";
export const store = configureStore({
    reducer: {
        boxoffice: boxofficeSlice,
        movies:searchMoviesSlice,
    }
})