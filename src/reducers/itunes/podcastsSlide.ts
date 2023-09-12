import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IEntry, IPodcastDetail } from "../../types/podcast";

type PodcastsSlideState = {
    initialLoad: boolean;
    isLoading: boolean;
    podcastsList?: IEntry[];
    podcastEpisodesList?: IPodcastDetail[];
};

/* the initial state. */
export const initialState: PodcastsSlideState = {
    initialLoad: true,
    isLoading: false,
    podcastsList: undefined,
    podcastEpisodesList: undefined,
};

/* It creates a Redux slice using the `createSlice` function from the `@reduxjs/toolkit` library. */
export const podcastsSlide = createSlice({
    initialState,
    name: "podcasts",
    reducers: {
        setInitialLoad: (state, action: PayloadAction<boolean>) => {
            state.initialLoad = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setPodcastsList: (state, action: PayloadAction<IEntry[]>) => {
            state.podcastsList = [...action.payload];
        },
        setPodcastsEpisodesList: (state, action: PayloadAction<IPodcastDetail[]>) => {
            state.podcastEpisodesList = [...(state.podcastEpisodesList || []), ...action.payload];
        },
    },
});

export const { setInitialLoad, setLoading, setPodcastsList, setPodcastsEpisodesList } = podcastsSlide.actions;

export default podcastsSlide.reducer;