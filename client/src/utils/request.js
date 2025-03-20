const requestTemplate = async (method, url, data, options = {}) => {
    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            body: JSON.stringify(data),
        }
    }

    const response = await fetch(url, options);
    console.log(response);
    
    const responseContentType = response.headers.get('Content-Type');
    if (!responseContentType) {
        return;
    }
    
    const result = await response.json();

    return result;

};

export default {
    get: requestTemplate.bind(null, 'GET'),
    // get: (...params) => request('GET', ...params)
    post: requestTemplate.bind(null, 'POST'),
    put: requestTemplate.bind(null, 'PUT'),
    delete: requestTemplate.bind(null, 'DELETE'),
    baseRequest: requestTemplate,
}
