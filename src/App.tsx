import { Redirect, Route } from 'react-router-dom';
import {
    IonApp,
    IonRouterOutlet,
    IonSplitPane,
    setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { AppMenu } from './modules/menu/AppMenu';
import { HomePage } from './modules/home/pages';

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonSplitPane contentId="main">
                <AppMenu />

                <IonRouterOutlet id="main">
                    <Route exact path="/home">
                        <HomePage />
                    </Route>

                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                </IonRouterOutlet>
            </IonSplitPane>
        </IonReactRouter>
    </IonApp>
);

export default App;
