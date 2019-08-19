import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { AuthUserContext } from 'utils/session';

import FullPageLoader from 'components/Loaders/FullPageLoader';
import LandingPage from 'containers/LandingPage';
import HomePage from 'containers/HomePage';

function Navigation(props) {
    const authUser = useContext(AuthUserContext);

    if (authUser === undefined) {
        // First load (determining authentication state)
        return <FullPageLoader />;
    } else if (authUser === null) {
        return (
            <Router>
                <>
                    <Route path="/login" component={LandingPage} />
                    <Route path="/signup" component={LandingPage} />
                    <Redirect to="/login" />
                </>
            </Router>
        );
    } else {
        return (
            <Router>
                <>
                    <Route path="/" component={HomePage} />
                </>
            </Router>
        );
    }
}

export default Navigation;