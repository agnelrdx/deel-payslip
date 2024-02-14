import { useState, useLayoutEffect, useCallback } from "react";
import { Capacitor } from "@capacitor/core";
import { ScreenOrientation } from "@capacitor/screen-orientation";
import { SafeArea } from "capacitor-plugin-safe-area";

const useAppDefaults = () => {
  const [insetTop, setInsetTop] = useState(0);

  const setAppDefaults = useCallback(() => {
    const platform = Capacitor.getPlatform();
    const root = document.querySelector("body");

    if (!root || platform !== "ios") return;

    SafeArea.getSafeAreaInsets().then(({ insets }) => {
      root.style.marginTop = `${insets.top}px`;
      setInsetTop(insets.top);
    });

    ScreenOrientation.addListener("screenOrientationChange", (orientation) => {
      root.style.marginTop =
        orientation.type !== "portrait-primary" ? "0px" : `${insetTop}px`;
    });

    return () => {
      SafeArea.removeAllListeners();
      ScreenOrientation.removeAllListeners();
    };
  }, [insetTop]);

  useLayoutEffect(setAppDefaults, [setAppDefaults]);
};

export default useAppDefaults;
