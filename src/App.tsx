import { lazy, Suspense } from "react";
import { setupIonicReact } from "@ionic/react";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import { Capacitor } from "@capacitor/core";
import { Toaster } from "react-hot-toast";

import useAppDefaults from "./hooks/useAppDefaults";

setupIonicReact();

const HomeLazy = lazy(() => import("./routes/Home"));
const PayslipLazy = lazy(() => import("./routes/Payslip"));
const ErrorLazy = lazy(() => import("./routes/Error"));

const App = () => {
  useAppDefaults();
  const platform = Capacitor.getPlatform();

  return (
    <IonApp className={`platform-${platform}`}>
      <IonReactRouter>
        <IonRouterOutlet>
          <Suspense fallback={<></>}>
            <Route path="/" render={() => <HomeLazy />} exact />
            <Route
              path="/payslip/:payslip"
              render={() => <PayslipLazy />}
              exact
            />
            <Route path="*" render={() => <ErrorLazy />} />
          </Suspense>
        </IonRouterOutlet>
      </IonReactRouter>
      <Toaster />
    </IonApp>
  );
};
export default App;
