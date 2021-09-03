import {Container} from "@material-ui/core";
import {Switch, Route, withRouter} from 'react-router-dom';

import './css/App.css';

import Main from './components/sections/Main';
import Footer from './components/footer/Footer';

import Catalog from './containers/catalog/Catalog';
import Product from "./containers/catalog/Product";
import Login from "./containers/autorize/Login";
import Register from "./containers/autorize/Register";

import {useEffect} from "react";
import HeaderAppBar from "./containers/cart/HeaderAppBar";
import Navigation from "./components/footer/Navigation";


// TODO: почистить код и убрать не нужные useEffect
function App({...props}) {

    useEffect(() => {
        props.getUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div>
            <header className='header'>
                <HeaderAppBar/>
                {/*<Header/>*/}
            </header>
            <Container maxWidth="lg" className='sections'>
                <Main/>
                <Switch>
                    <Route exact path='/' component={Catalog}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/product/:id' component={Product}/>
                </Switch>
            </Container>
            <footer>
                <Footer/>
            </footer>
            <Container>
                <Navigation/>
            </Container>
        </div>
    );
}

export default withRouter(App);
