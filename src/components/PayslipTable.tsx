import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  useIonRouter,
} from "@ionic/react";
import { Capacitor } from "@capacitor/core";
import { useRef } from "react";

interface PayslipTableProps {
  payslipData: {
    id: string;
    company: string;
    dateFrom: string;
    dateTo: string;
    incentives: number;
    amount: number;
  }[];
}

import useCardAnimation from "../hooks/useCardAnimation";

const PayslipTable = ({ payslipData }: PayslipTableProps) => {
  const platform = Capacitor.getPlatform();
  const router = useIonRouter();
  const cardEl = useRef<HTMLIonCardElement | null>(null);
  useCardAnimation(cardEl, 600);

  return (
    <IonCard className="payslips__wrapper" ref={cardEl}>
      <IonCardHeader>
        <IonCardSubtitle>
          <p>Total of {payslipData.length} payslips</p>
        </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <IonList>
          {payslipData.map((item, key) => (
            <IonItem key={item.id}>
              <div className="payslips__wrapper-label">
                <IonLabel>
                  {key + 1}. {item.company}
                  {platform !== "web" && (
                    <>
                      <p>
                        Date: {item.dateFrom} -<br /> {item.dateTo}
                      </p>
                      <p>Amount: ${item.amount}</p>
                    </>
                  )}
                </IonLabel>
                {platform === "web" && (
                  <>
                    <IonLabel>
                      {item.dateFrom} - {item.dateTo}
                    </IonLabel>
                    <IonLabel>${item.amount}</IonLabel>
                  </>
                )}
                <IonButton
                  onClick={() => {
                    router.push(`/payslip/${item.id}`);
                  }}
                  size="small"
                >
                  View
                </IonButton>
              </div>
            </IonItem>
          ))}
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default PayslipTable;
