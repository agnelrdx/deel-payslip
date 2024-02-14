import { useRef, useEffect } from "react";
import { createAnimation } from "@ionic/react";
import type { Animation } from "@ionic/react";

const useCardAnimation = (
  cardEl: React.MutableRefObject<HTMLIonCardElement | null>,
  delay: number
) => {
  const animation = useRef<Animation | null>(null);

  useEffect(() => {
    if (animation.current === null) {
      animation.current = createAnimation()
        .addElement(cardEl.current!)
        .delay(delay)
        .duration(300)
        .fromTo("opacity", "0", "1");
      animation.current?.play();
    }
  }, [cardEl, delay]);
};

export default useCardAnimation;
