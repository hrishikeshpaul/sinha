export interface SocialsType {
    appleMusic: string;
    spotify: string;
    instagram: string;
    youtube: string;
    tidal: string;
}

export interface ArtistsType {
    name: string;
}

export interface ReleasesType {
    id: number;
    art: string;
    artThumbnail: string;
    title: string;
    artists: ArtistsType[];
    description: string;
    stream: {
        spotify: string;
        appleMusic: string;
        youtube: string;
    };
}

export interface DataType {
    socials: SocialsType;
    releases: ReleasesType[];
}

const DATA_URL_DEV = "./data.json";
const DATA_URL_PROD = "";

export const readData = async (): Promise<DataType> => {
    const request = await fetch(
        process.env.NODE_ENV === "development" ? DATA_URL_DEV : DATA_URL_PROD
    );
    const data = await request.json();

    return data;
};
