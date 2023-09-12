import { IResultResponse } from "./api";

type Attributes = {
    label?: string;
    attributes?: any[];
};

type Category = {
    attributes: {
        'im:id': string;
        term: string;
        scheme: string;
        label: string;
    };
};

export interface IPodcastsFeedResponse {
    feed: Feed;
}

export interface IPodcastsResponse extends IResultResponse {
    data: IPodcastsFeedResponse;
}

interface IAuthor {
    name: Attributes;
    uri: Attributes;
}

export interface IEntry {
    id?: {
        label: string;
        attributes: {
            'im:id': string;
        };
    };
    category?: Category;
    'im:artist': Attributes;
    'im:contentType'?: Attributes;
    'im:image': Attributes[];
    'im:name'?: Attributes;
    'im:price'?: Attributes;
    'im:releaseDate'?: Attributes;
    link?: Attributes[];
    rights?: Attributes;
    summary?: Attributes;
    title: Attributes;
    postcastId: string;
    podcastTitle: string;
    podcastArtist: string;
    podcastImage?: string;
}

export interface Feed {
    id: Attributes;
    author: IAuthor;
    entry: IEntry[];
    icon: Attributes;
    updated: Attributes;
    rights: Attributes;
    title: Attributes;
    link: Attributes[];
}

export interface IPodcastsListProps {
    podcastsList: IEntry[] | undefined;
    loading: boolean;
    error: boolean;
}
export interface IPodcastDetailResponse {
    resultCount: number;
    results: IPodcastDetail[];
}
export interface IallOriginsResponse {
    contents: string;
    status: {
        http_code: number;
        [key: string]: any;
    };
}
export interface IPodcastDetail {
    trackName: string;
    releaseDate: string;
    wrapperType: string;
    trackTimeMillis: number;
    collectionName: string;
    artistName: string;
    description: string;
    artworkUrl160: string;
    episodeUrl?: string;
    [key: string]: any;
}

export interface IPodcastResponse extends IResultResponse {
    data: IallOriginsResponse;
}

export interface IPodcastEpisodeProps {
    podcastEpisodesList: IPodcastDetail[] | undefined;
    loading: boolean;
    error: boolean;
}