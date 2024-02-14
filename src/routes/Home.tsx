import { IonContent } from "@ionic/react";

import Header from "../components/Header";
import WelcomeCard from "../components/WelcomeCard";
import Revenue from "../components/Revenue";
import PayslipTable from "../components/PayslipTable";
import { payslips } from "../utils";

const Home = () => {
  return (
    <>
      <Header title="Dashboard" />
      <IonContent>
        <div className="page-wrapper">
          <WelcomeCard />
          <Revenue payslipData={payslips} />
          <PayslipTable payslipData={payslips} />
        </div>
      </IonContent>
    </>
  );
};

export default Home;
