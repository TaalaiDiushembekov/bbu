import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./screens/Home/Home.js";
import ProductDetails from "./screens/product-details.js";
import Cart from "./screens/cart.js";
import Admin from "./screens/admin.js";
import UserDetails from "./screens/user-details.js";
import About from "./screens/About/About.js";
import Team from "./screens/Team/Team.js";
import Tariffs from "./screens/Tariffs/Tariffs.js";
import Services from "./screens/Services/Services.js";
import Login from "./screens/Login/Login.js";
import Profile from "./screens/Profile/Profile.js";
import NotFoundPage from "./screens/NotFoundPage.js";
import Register from "./screens/register.js"
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Layout from './components/UI/Layout/Layout.js';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
            <Route exact path='/' component={() => <Home />} />
            <Route exact path='/about' component={() => <About />} />
            <Route exact path='/tariffs' component={() => <Tariffs />} />
            <Route exact path='/services' component={() => <Services />} />
            <Route exact path='/team' component={() => <Team />} />
            <Route exact path='/product/:id' component={() => <ProductDetails />} />
            <Route exact path='/cart/:id?' component={() => <Cart />} />
            <Route exact path='/login' component={() => <Login />} />
            <Route exact path='/profile' component={() => <Profile />} />
            <Route exact path='/admin' component={() => <Admin />} />
            <Route exact path='/admin/:id' component={() => <UserDetails />} />
            
            {/*<Route exact path='*' component={() => <NotFoundPage />} />*/}
            {/*<Route exact path='/allUsers' component={() => <AllUsers />} />*/}
            {/*<Route exact path='/register' component={() => <Register />} />*/}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
