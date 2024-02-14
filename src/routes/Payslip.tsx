import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { IonContent } from "@ionic/react";

import { payslips } from "../utils";
import Error from "./Error";
import Header from "../components/Header";
import PayslipComponent from "../components/Payslip";
import DownloaderPdf from "../components/DownloaderPdf";

const Payslip = () => {
  const { payslip } = useParams<{ payslip: string }>();
  const slip = useMemo(
    () => payslips.find((item) => item.id === payslip),
    [payslip]
  );

  if (!slip) return <Error />;

  return (
    <>
      <Header title={`Payslip - ${slip.company}`} />

      <IonContent>
        <div className="page-wrapper payslip__page">
          <h2>
            Payslip for {slip.dateFrom} - {slip.dateTo}
          </h2>
          <DownloaderPdf />

          <PayslipComponent payslip={slip} />
        </div>
      </IonContent>
    </>
  );
};

export default Payslip;
