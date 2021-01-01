import Homepage from "./Homepage";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IntlProvider} from "react-intl";
import {loadTranslations} from "./utils/translations";
import {TranslationsState} from "./store/translations/translationsSlice.service";

const App = () => {

    const messages = useSelector((state: TranslationsState) => state.translations.messages)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTranslations())
    }, [dispatch])

    return (
        <IntlProvider messages={messages} locale="fr" defaultLocale="fr">
            <Homepage />
        </IntlProvider>
    )
}

export default App;
