import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Container from "@material-ui/core/Container";
import {Box} from "@material-ui/core";
import Home from "./screens/Home.js";
import Login from "./components/Login/Login.js";
import ProductDetails from "./screens/product-details.js";
import Cart from "./screens/cart.js";
import Register from "./screens/register.js"
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Admin from "./screens/admin.js";
// import AllUsers from "./components/allUsers.js";
import Profile from "./components/Profile/Profile.js";
import UserDetails from "./screens/user-details.js";
import About from "./screens/About.js";
import Menu from "./screens/Menu.js";
import Tariffs from "./screens/Tariffs.js";
import Services from "./screens/Services.js";
import LoginScreen from "./screens/LoginScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import NotFoundPage from "./screens/NotFoundPage.js";


function App() {
  return (
  <Router>
    {/*<Header />*/}
    {/*<main>*/}

        <Switch>
          <Box>
            <Route exact path='/' component={() => <Home />} />
            <Route exact path='/about' component={() => <About />} />
            <Route exact path='/tariffs' component={() => <Tariffs />} />
            <Route exact path='/services' component={() => <Services />} />
            <Route exact path='/menu' component={() => <Menu />} />
            <Route exact path='/product/:id' component={() => <ProductDetails />} />
            <Route exact path='/cart/:id?' component={() => <Cart />} />
            <Route exact path='/login' component={() => <LoginScreen />} />
            {/*<Route exact path='/register' component={() => <Register />} />*/}
            <Route exact path='/profile' component={() => <ProfileScreen />} />
            <Route exact path='/admin' component={() => <Admin />} />
            <Route exact path='/admin/:id' component={() => <UserDetails />} />
            {/*<Route exact path='*' component={() => <NotFoundPage />} />*/}
            {/*<Route exact path='/allUsers' component={() => <AllUsers />} />*/}
          </Box>
        </Switch>

    {/*</main>*/}
    {/*<Footer />*/}
  </Router>
  );
}

export default App;
