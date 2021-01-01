import flatten from 'flat';
import { setTranslations } from '../../store/translations/translationsSlice';
import {handleJSONResponse} from "../fetch";
import {Dispatch} from "redux";

export const loadTranslations = () => (dispatch: Dispatch<any>) => {
    return fetch(`${window.location.origin}/data/translations.json`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    })
    .then(handleJSONResponse)
    .then((data) => dispatch(setTranslations(flatten(data))));
}
