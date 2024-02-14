import { useRef } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react";

import useCardAnimation from "../hooks/useCardAnimation";
import { getCurrentTime } from "../utils";

const WelcomeCard = () => {
  const greetings = getCurrentTime();
  const cardEl = useRef<HTMLIonCardElement | null>(null);
  useCardAnimation(cardEl, 400);

  return (
    <IonCard ref={cardEl}>
      <IonCardHeader>
        <IonCardTitle>{greetings} Steve!</IonCardTitle>
        <IonCardSubtitle>Welcome to your Deel payslip summary</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        You will find your detailed payslip report below, including your
        earnings.
        <p className="card__custom-amount">Account Balance: $45,000</p>
        <p className="card__custom-amount">Last Withdrawn: $5,000</p>
      </IonCardContent>
    </IonCard>
  );
};

export default WelcomeCard;
