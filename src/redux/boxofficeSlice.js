import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import boxoffice from "../pages/boxoffice/boxOfficeData";
const url = 'https://imdb-api.com/en/API/BoxOffice/k_xj9ccthc'


const boxofficeSlice = createSlice({
    name: "movies",
    initialState: {
        movies: boxoffice,
        isLoading: false,
        
    }
});


export default boxofficeSlice.reducer