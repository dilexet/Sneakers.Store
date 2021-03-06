import {Container} from "@material-ui/core";
import {Switch, Route, withRouter} from 'react-router-dom';

import '../../Shared/styles/css/App.css';

import Main from '../../Menu/Header/components/Main';
import Footer from '../../Menu/Footer/components/Footer';

import Catalog from '../../Catalog/containers/Catalog';
import Product from "../../ProductPage/containers/Product";
import Login from "../../Authentication/containers/Login";
import Register from "../../Authentication/containers/Register";

import {useEffect} from "react";
import HeaderAppBar from "../../Menu/Header/containers/HeaderAppBar";
import Navigation from "../../Menu/Footer/components/Navigation";


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
