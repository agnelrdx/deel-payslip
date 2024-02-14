import { IonContent } from "@ionic/react";

import Header from "../components/Header";

const Error = () => {
  return (
    <>
      <Header title="Error" />
      <IonContent>
        <div className="page-wrapper error-wrapper">
          <h2>400</h2>
          <p>Page not found.</p>
        </div>
      </IonContent>
    </>
  );
};

export default Error;
