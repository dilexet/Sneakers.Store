import {Provider} from "react-redux";
import {ToastProvider} from "react-toast-notifications";
import {Container} from "@material-ui/core";

import {store} from "./store";
import './css/App.css';

function App() {
    return (
        <Provider store={store}>
            <ToastProvider autoDismiss={true}>
                <Container maxWidth="lg">
                    <header>

                    </header>
                    <section>

                    </section>
                    <footer>

                    </footer>
                </Container>
            </ToastProvider>
        </Provider>
    );
}

export default App;
