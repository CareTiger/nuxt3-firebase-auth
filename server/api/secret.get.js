// latest functions for h3 - https://www.jsdocs.io/package/h3
import { getCookie } from 'h3';

export default defineEventHandler(async (event) => {
    const user = getCookie(event, 'userCookie');
    const payload = getQuery(event);

    if (user) {
        return 'This is a top secret message from the API';
    } else {
        return 'Must be signed in to see secret message';
    }
});
