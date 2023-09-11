import { apiItunesWithTag } from "../../services/api";
import { IEntry, IPodcastsFeedResponse } from "../../types/podcast";

/* The `apiItunesWithTag` endpoint from the `api` service. The
`injectEndpoints` function is used to define the endpoints for the API slice. */
export const itunesApiSlice = apiItunesWithTag.injectEndpoints({
    endpoints: (builder) => ({
        /* The `getPodcasts` endpoint.*/
        getPodcasts: builder.query<IPodcastsFeedResponse, {
            limit: number;
            gender: number;
        }>({
            query: ({limit, gender}) => ({
                url: `/us/rss/toppodcasts/limit=${limit}/genre=${gender}/json`,
                method: "GET",
            }),
            transformResponse: (response: IPodcastsFeedResponse) => {
                const { feed } = response;
                const entryList: IEntry[] = []
                Object.values(feed.entry).forEach((entry) => {
                    const entryData: IEntry = {
                        ...entry,
                        podcastTitle: entry.title.label ?? "",
                        podcastArtist: entry["im:artist"].label ?? "unknown",
                        podcastImage: entry["im:image"].length > 0 ? entry["im:image"][0].label : "",
                    };
                    entryList.push(entryData);
                });
                return {
                    feed: {
                        ...feed,
                        entry: entryList,
                    },
                };
            },
        }),
    }),
});

export const { useGetPodcastsQuery } = itunesApiSlice;
