import { useState } from "react";
import QRCodeImage from "./components/QRCodeImage";
import TextInputButton from "./components/TextInputButton";

function App() {
  const [qrCodeImage, setQrCodeImage] = useState();

  return (
    <div
      className={
        !qrCodeImage
          ? "mx-auto my-12 grid max-w-xl grid-rows-[auto] place-items-center gap-12 border p-8"
          : "mx-auto my-12 grid max-w-xl grid-rows-[auto_auto] place-items-center gap-12 border p-8"
      }
    >
      {qrCodeImage && <QRCodeImage qrCodeImage={qrCodeImage} />}
      <TextInputButton setQrCodeImage={setQrCodeImage} />
    </div>
  );
}

export default App;
