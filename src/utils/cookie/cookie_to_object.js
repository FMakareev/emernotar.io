export const cookieToObject = (cookies) => {
    if (typeof cookies === 'object') {
        return cookies;
    } else if(typeof cookies === 'string' && cookies.length)
        try {
            let list = {};

            cookies && cookies.split(';').forEach(function (cookie) {
                let parts = cookie.split('=');
                list[parts.shift().trim()] = decodeURI(parts.join('='));
            });
            return list;
        } catch (err) {
            console.log(err);
        }
}