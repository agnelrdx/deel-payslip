import { useRef } from "react";
import {
  IonCard,
  IonCardHeader,
  IonList,
  IonItem,
  IonLabel,
  IonCardContent,
} from "@ionic/react";

import useCardAnimation from "../hooks/useCardAnimation";
import Logo from "../assets/icon.svg";
import Signature from "../assets/sig.png";

interface PayslipProps {
  payslip: {
    id: string;
    company: string;
    dateFrom: string;
    dateTo: string;
    incentives: number;
    amount: number;
  };
}

const Payslip = ({ payslip }: PayslipProps) => {
  const cardEl = useRef<HTMLIonCardElement | null>(null);
  useCardAnimation(cardEl, 400);

  return (
    <IonCard className="payslips__wrapper" ref={cardEl}>
      <IonCardHeader>
        <div className="payslip__head">
          <img className="payslip__image" src={Logo} alt="Deel" />
          <div className="payslip__doc">
            <p>Document ID: {payslip.id}</p>
            <p>Issue Date: {payslip.dateTo}</p>
            <p>Till Date: {payslip.dateFrom}</p>
          </div>
        </div>
      </IonCardHeader>

      <IonCardContent>
        <div className="payslip__address">
          <p>
            <i>Billing From:</i>
          </p>
          <p>Microsoft Gulf FZ LLC</p>
          <p>
            DIC Building @8 - Building No 8, Sheikh Zayed Road, Dubai Internet
            City
          </p>
          <p>United Arab Emirates, #1101</p>
        </div>
        <div className="payslip__address last">
          <p>
            <i>Billing To:</i>
          </p>
          <p>Agnel Joseph</p>
          <p>Business Bay, Dubai</p>
          <p>United Arab Emirates, #2301</p>
        </div>
        <IonList>
          <IonItem>
            <IonLabel className="payslip__amount">
              <p>Base</p>
              <p>${payslip.amount - payslip.incentives}</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel className="payslip__amount">
              <p>Incentives</p>
              <p>${payslip.incentives}</p>
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel className="payslip__amount">
              <p>Total</p>
              <p>
                <b>${payslip.amount}</b>
              </p>
            </IonLabel>
          </IonItem>
        </IonList>
        <div className="payslip__signature-box">
          <img className="payslip__signature" src={Signature} alt="signature" />
          <p>Microsoft HR</p>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default Payslip;
