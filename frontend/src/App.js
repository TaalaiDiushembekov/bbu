import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home/Home.js";

import Admin from "./screens/admin.js";
import UserDetails from "./screens/user-details";
import About from "./screens/About/About.js";
import Team from "./screens/Team/Team.js";
import Tariffs from "./screens/Tariffs/Tariffs.js";
import Services from "./screens/Services/Services.js";
import Login from "./screens/Login/Login.js";
import Profile from "./screens/Profile/Profile";
// import NotFoundPage from "./screens/NotFoundPage.js";
// import Register from "./screens/register.js"
import Layout from "./components/UI/Layout/Layout.js";
import RegisterUser from "./screens/RegisterUser/RegisterUser.js";
import { useDispatch } from "react-redux";
import { useRefreshTokenQuery } from "./redux/auth/auth.api.js";
import { setUser } from "./redux/auth/auth.slice.js";
import { setOrganization } from "./redux/organization/org.slice.js";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Organizations from "./screens/organizations.jsx";
import OrgDetails from "./screens/org-details.jsx";
import AddTariff from "./screens/AddTariff/AddTariff.js";

function App() {
    const dispatch = useDispatch();
    const { data, isLoading } = useRefreshTokenQuery();

    useEffect(() => {
        if (!isLoading) {
            const org = data?.org;
            dispatch(setUser({ ...data }));
            dispatch(setOrganization({ ...org }));
        }
    }, [isLoading]);

    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={() => <Home />} />
                    <Route exact path="/about" component={() => <About />} />
                    <Route
                        exact
                        path="/tariffs"
                        component={() => <Tariffs />}
                    />
                    <Route
                        exact
                        path="/services"
                        component={() => <Services />}
                    />
                    <Route exact path="/team" component={() => <Team />} />
                    <Route exact path="/login" component={() => <Login />} />
                    <PrivateRoute
                        exact
                        path="/admin"
                        role="admin"
                        component={() => <Admin />}
                    />
                    <PrivateRoute
                        exact
                        path="/profile"
                        role="user"
                        component={() => <Profile />}
                    ></PrivateRoute>
                    <Route
                        exact
                        path="/user-registration"
                        component={() => <RegisterUser />}
                    />
                    <PrivateRoute
                        exact
                        role="admin"
                        path="/organizations"
                        component={() => <Organizations />}
                    />
                    <PrivateRoute
                        exact
                        role="admin"
                        path="/organizations/:id"
                        component={() => <OrgDetails />}
                    />

                    <PrivateRoute
                        exact
                        role="admin"
                        path="/admin/:id"
                        component={() => <UserDetails />}
                    />

                    {/* <PrivateRoute
                        exact
                        role="admin"
                        path="/add-tariff"
                        component={() => <AddTariff />}
                    /> */}
                    <Route exact path='/add-tariff' component={() => <AddTariff />} />

                    {/*<Route exact path='*' component={() => <NotFoundPage />} />*/}
                    {/*<Route exact path='/allUsers' component={() => <AllUsers />} />*/}
                    {/*<Route exact path='/register' component={() => <Register />} />*/}
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
