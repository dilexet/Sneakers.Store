import {Container} from "@material-ui/core";
import {Switch, Route} from 'react-router-dom';

import './css/App.css';

import Header from './containers/autorize/Header';
import Main from './components/sections/Main';
import Footer from './components/footer/Footer';

import Catalog from './containers/catalog/Catalog';
import Product from "./containers/catalog/Product";
import Login from "./containers/autorize/Login";
import Register from "./containers/autorize/Register";
import {useEffect} from "react";


// TODO: почистить код и убрать не нужные useEffect
function App({...props}) {

    useEffect(() => {
        props.getUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <Container maxWidth="lg">
            <header>
                <Header/>
            </header>
            <section>
                <Main/>
                <Switch>
                    <Route exact path='/' component={Catalog}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/product/:Id' component={Product}/>
                </Switch>
            </section>
            <footer>
                <Footer/>
            </footer>
        </Container>
    );
}

export default App;
