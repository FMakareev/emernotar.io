import extractFiles from 'extract-files';
import {constructDefaultOptions} from "apollo-fetch";

/*TODO: задокументировать */
/*
* @param {object} requestOrRequests - object server request
* @param {object} options - Params fetch request
* @description - this function receives the request body and parameters. Checks whether there are files in the request body and replaces the header "application/json" with "multipart/form-data", and the request body converts from "json" to "formData". Then it returns the result for sending to the server.
* */
export default (requestOrRequests, options) => {


    const files = extractFiles(requestOrRequests);

    if (files.length) {
        if (typeof FormData === 'undefined') {
            throw new Error('Environment must support FormData to upload files.');
        }
        options.credentials = 'include';
        options.mode = 'cors';
        options.method = 'POST';
        options.body = new FormData();

        files.forEach(({path, file}) => {
            options.body.append(path, file);
        });

        for (let prop in requestOrRequests) {
            if (typeof requestOrRequests[prop] === 'object') {
                options.body.append(prop, JSON.stringify(requestOrRequests[prop]))
            } else {
                options.body.append(prop, requestOrRequests[prop])
            }
        }


        return options;
    }

    options = {
        credentials: 'include',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    return constructDefaultOptions(requestOrRequests, options);
};