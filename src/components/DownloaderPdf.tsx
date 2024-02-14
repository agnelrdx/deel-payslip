import { IonButton, IonIcon } from "@ionic/react";
import { Toast } from "@capacitor/toast";
import toast from "react-hot-toast";

import { Capacitor } from "@capacitor/core";
import { download } from "ionicons/icons";
import { Downloader } from "downloader";

const DownloaderPdf = () => {
  const platform = Capacitor.getPlatform();

  const handleClick = async () => {
    await Downloader.download();
    if (platform === "web")
      return toast("Download completed. Please check the downloads folder.", {
        position: "bottom-left",
        duration: 2000,
      });
    Toast.show({
      text: "Download completed. Please check the downloads folder.",
    });
  };

  return (
    <>
      <IonButton fill="outline" size="small" onClick={handleClick}>
        <IonIcon slot="start" icon={download}></IonIcon>
        Download File
      </IonButton>
    </>
  );
};

export default DownloaderPdf;
