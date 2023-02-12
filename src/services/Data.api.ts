export interface SocialsType {
    appleMusic: string;
    spotify: string;
    instagram: string;
}

export interface DataType {
    socials: SocialsType;
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
