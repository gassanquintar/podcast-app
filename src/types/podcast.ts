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
    id?: Attributes;
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
