import {handleJSONResponse} from "../fetch";

export const getTranslation = (key: string) => {
    return fetch(`${window.location.origin}/data/translations.json`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    })
    .then(handleJSONResponse)
    .then((data) => {
        console.log(data)
        console.log(data.key)
        return data[key]
    });
}
