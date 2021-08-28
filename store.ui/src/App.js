import {Provider} from "react-redux";
import {ToastProvider} from "react-toast-notifications";
import {Container} from "@material-ui/core";

import {store} from "./store";
import './css/App.css';

import Header from './components/header/Header';
import Main from './components/sections/Main';
import Footer from './components/footer/Footer';

import Catalog from './containers/catalog/Catalog';


function App() {
    return (
        <Provider store={store}>
            <ToastProvider autoDismiss={true}>
                <Container maxWidth="lg">
                    <header>
                        <Header/>
                    </header>
                    <section>
                        <Main/>
                        <Catalog/>
                    </section>
                    <footer>
                        <Footer/>
                    </footer>
                </Container>
            </ToastProvider>
        </Provider>
    );
}

export default App;
