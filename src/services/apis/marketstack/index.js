import {handleJSONResponse, urlConstructor} from "../../../utils/fetch";
import {dateTimeToDate} from "../../../utils/functions";
import {notifier} from "../../../utils/notifier";

export const getMarketData = async (symbol, from, to) => {

    const urlConfig = {
        baseUrl: 'http://api.marketstack.com',
        apiEndpoint: '/v1/eod',
        queryParams: {
            access_key: process.env.REACT_APP_MARKETSTACK_ACCESS_KEY,
            symbols: symbol,
            date_from: dateTimeToDate(from),
            date_to: dateTimeToDate(to),
            limit: 150
        },
    };

    return fetch(urlConstructor(urlConfig), { method: "GET" })
      .then(handleJSONResponse)
      .then(response => response)
      .catch(err => {
        notifier.alert(err);
      });
}
