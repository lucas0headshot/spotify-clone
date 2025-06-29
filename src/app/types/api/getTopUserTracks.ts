export type Artist = {
    external_urls?: {
        spotify: string;
    };
    followers?: {
        href: string;
        total: number;
    };
    genres?: string[];
    href: string;
    id: string;
    images: {
        url: string;
        height: number;
        width: number;
    }[];
    name: string;
    popularity: number;
    type: "artist";
    uri: string;
};

export type GetUserTopTracks = {
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
    items: Artist[];
};
