export const cookieToString = (cookies) => {
    if(typeof cookies === "object") {
        let newCookies = '';
        for (let prop in cookies) {
            const item = prop + '=' + cookies[prop] + ';';
            newCookies += item;
        }
        return newCookies;
    } else if(typeof cookies === "string") {
        return cookies;
    }
}