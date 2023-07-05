export interface StrapiObject {
    id: number;
    attributes: {
        createdAt: string;
        publishedAt: string;
        updatedAt: string;
        [key: string]: unknown;
    }
}

export interface StrapiResponse {
    data: StrapiObject[];
    meta: {
        [key: string]: unknown
    }
}


export type Review = StrapiObject & {
    attributes: {
        body: string;
        rating: number;
        title: string;
    }
}