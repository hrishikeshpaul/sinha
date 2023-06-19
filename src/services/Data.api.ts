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

export interface ReleasesType extends SocialsType {
    id: number;
    art: string;
    artThumbnail: string;
    title: string;
    artists: ArtistsType[];
    description: string;
}

export interface GalleryType {
    src: string
}

export interface DataType {
    socials: SocialsType;
    releases: ReleasesType[];
    gallery: GalleryType[];
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
