import flatten from 'flat';
import { setTranslations } from '../../store/translations/translationsSlice';
import {handleJSONResponse} from "../fetch";

export const loadTranslations = () => dispatch => {
    return fetch(`${window.location.href}/data/translations.json`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    })
    .then(handleJSONResponse)
    .then((data) => dispatch(setTranslations(flatten(data))));
}
