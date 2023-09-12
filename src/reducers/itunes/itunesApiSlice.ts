import { apiItunesWithTag } from "../../services/api";
import { IEntry, IPodcastsFeedResponse, IallOriginsResponse } from "../../types/podcast";

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
            /* transform the response from the API to the format expected by the application. */
            transformResponse: (response: IPodcastsFeedResponse) => {
                const { feed } = response;
                const entryList: IEntry[] = []
                Object.values(feed.entry).forEach((entry: IEntry) => {
                    const entryData: IEntry = {
                        ...entry,
                        postcastId: entry.id?.attributes?.["im:id"] ?? "",
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
        /* The `getPodcastDetail` endpoint.*/
        getPodcastDetail: builder.query<IallOriginsResponse, {
            id: string;
            media: string;
            entity: string;
            limit: number;
        }>({
            //todo: for some reason the api url is not working well with env variables. So, the url is hardcoded.
            query: ({ id, media, entity, limit}) => ({
                url: `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`)}`,
                method: "GET",
            }),
            /* transform the response from the API to the format expected by the application. */
            transformResponse: (response: IallOriginsResponse) => {
                const json = JSON.parse(response.contents);
                return {
                    ...response,
                    contents: json,
                };
            },
        }),
    }),
});

export const { useGetPodcastsQuery, useGetPodcastDetailQuery } = itunesApiSlice;
