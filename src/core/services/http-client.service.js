class HttpClient {
    constructor() {
        this.baseUrl = 'http://localhost:3600';
        this.commonHeader = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
    }

    getHeader = header => ({
        ...this.commonHeader,
        ...header
    });

    callApi = (type, url, body, header) => {
        return new Promise((resolve, reject) => {
            return fetch(`${this.baseUrl}/${url}`, {
                method: `${type}`,
                headers: this.getHeader(header),
                body: JSON.stringify(body || {})
            }).then((res) => {
                if (!res.json) {
                    reject({ message: 'Something went wrong' });
                    return;
                } else if (res.status !== 200) { 
                    res.json().then(error => reject(error));
                    return;
                }
                res.json().then(response => resolve(response));
            });
        });          
    }

    get({ url, header, body}) {
        return this.callApi('get', url, body, header);
    }

    post({ url, header, body}) {
        return this.callApi('post', url, body, header);
    }
}

const Http = new HttpClient();

export default Http;