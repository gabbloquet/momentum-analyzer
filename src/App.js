import Homepage from "./views/Homepage";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IntlProvider} from "react-intl";
import {loadTranslations} from "./utils/translations";
import Spinner from "./components/Spinner";

const App = () => {

    const messages = useSelector(state => state.translations.messages)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTranslations())
    }, [dispatch])

    return (
      <>
        { messages ? (
              <IntlProvider messages={messages} locale="fr" defaultLocale="fr">
                  <Homepage />
              </IntlProvider>
        ) : (
              <Spinner />
        )}
      </>
    )
}

export default App;
