import type { FAQ } from './type';

export const getFaqs = async (): Promise<FAQ[]> => {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
    );

    if (!response.ok) {
        throw new Error('Failed to fetch FAQs');
    }

    return response.json();
};