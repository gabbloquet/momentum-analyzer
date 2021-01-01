import {handleJSONResponse, urlConstructor} from "../../../utils/fetch";

const getMarketData = (symbol: string, from: string, to: string) => {

    const urlConfig = {
        baseUrl: 'http://api.marketstack.com',
        apiEndpoint: '/v1/eod',
        queryParams: {
            access_key: process.env.MARKETSTACK_ACCESS_KEY,
            symbols: symbol,
            date_from: from,
            date_to: to,
        },
    };

    return fetch(urlConstructor(urlConfig), { method: "GET" })
    .then(handleJSONResponse)
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
}
