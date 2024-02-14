import { useRef } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

import useCardAnimation from "../hooks/useCardAnimation";

interface RevenueProps {
  payslipData: {
    id: string;
    company: string;
    dateFrom: string;
    dateTo: string;
    incentives: number;
    amount: number;
  }[];
}

const Revenue = ({ payslipData }: RevenueProps) => {
  const cardEl = useRef<HTMLIonCardElement | null>(null);
  useCardAnimation(cardEl, 500);

  return (
    <IonCard ref={cardEl}>
      <IonCardHeader className="card__custom-header">
        <IonCardSubtitle>Total Revenue (Salary)</IonCardSubtitle>
        <IonCardTitle>$53,100.00</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        +66.6% from last month including sales incentives
      </IonCardContent>
      <ResponsiveContainer className="chart-wrapper" width="100%" height={150}>
        <LineChart data={payslipData}>
          <Line
            animationBegin={1350}
            animationDuration={1500}
            type="monotone"
            dataKey="amount"
            stroke="#3880ff"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </IonCard>
  );
};

export default Revenue;
