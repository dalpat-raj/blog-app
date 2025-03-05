
export type BlogState = { success?: string; error?: string };

export interface BlogData {
    id: number;
    title: string;
    description: string;
    content: string;
    image: string;
}