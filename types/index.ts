export interface Genre {
    id: number;
    name: string;
    fullName?: string;
    description?: string;
    heroImg?: string;
    slug: string;
}

export interface Book {
    id: number;
    name: string;
    description?: string;
    categoryId: number;
    slug: string;
    sku?: string;
    heroImg?: string;
    image?: string[];
    price?: number;
    originalPrice?: number;
    quantity?: number;
    color?: string;
}