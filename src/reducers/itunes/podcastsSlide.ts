import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IEntry } from "../../types/podcast";

type PodcastsSlideState = {
    podcastsList?: IEntry[];
    isLoading: boolean;
    initialLoad: boolean;
};

/* the initial state. */
export const initialState: PodcastsSlideState = {
    podcastsList: undefined,
    isLoading: false,
    initialLoad: true,
};

/* It creates a Redux slice using the `createSlice` function from the `@reduxjs/toolkit` library. */
export const podcastsSlide = createSlice({
    initialState,
    name: "podcasts",
    reducers: {
        setPodcastsList: (state, action: PayloadAction<IEntry[]>) => {
            state.podcastsList = [...action.payload];
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setInitialLoad: (state, action: PayloadAction<boolean>) => {
            state.initialLoad = action.payload;
        },
    },
});

export const { setPodcastsList, setLoading, setInitialLoad } = podcastsSlide.actions;

export default podcastsSlide.reducer;