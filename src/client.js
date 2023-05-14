import { createClient } from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = createClient ({
    projectId: '88dx196q',
    dataset: 'production',
    apiVersion: '2023-05-06',
    useCdn: true,
    token: 'skLJUinho9lO4HYJQt4t9XaTrOxU5BxvpQuXdPu8Ty5lJwSntFxNyyzTENGc9O0rMht34CsKKrGKwTxjjweANmGqeOZTnYFPt5ZL5L8qtOp8cKhN7niiEYiDGk2EaJtTW4KGacIAA0Mo3keHhLXBhuf1NUmFGoI0NI0ahGy5Tdg4yWCQvJEo',
})

export default client

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

