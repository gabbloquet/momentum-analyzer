import Strategy from "./views/Strategy";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {IntlProvider} from "react-intl";
import {loadTranslations} from "./utils/translations";
import Spinner from "./components/Spinner";
import TickerAnalyse from "./views/TickerAnalyse";
import Topbar from "./containers/Topbar";

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
                <Router>
                  <div>
                    <Topbar />

                    <Switch>
                      <Route path="/research">
                        <TickerAnalyse />
                      </Route>
                      <Route path="/">
                        <Strategy />
                      </Route>
                    </Switch>
                  </div>
                </Router>
              </IntlProvider>
        ) : (
              <Spinner />
        )}
      </>
    )
}

export default App;
