import { useState } from "react";
import { fetchQRCode } from "../services/fetchQRCode";

function TextInputButton({ setQrCodeImage }) {
  const [textOrUrl, setTextOrUrl] = useState("");

  async function handleFetchQRCode(e) {
    e.preventDefault();
    if (!textOrUrl) return;
    const imageObjectURL = await fetchQRCode(textOrUrl);
    setQrCodeImage(imageObjectURL);
    setTextOrUrl("");
  }

  return (
    <form onSubmit={handleFetchQRCode} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Enter text or a URL"
        value={textOrUrl}
        onChange={(e) => setTextOrUrl(e.target.value)}
        className="border px-4 py-2 text-base tracking-wider text-stone-700 placeholder:text-sm focus:outline-none"
      />
      <button className="cursor-pointer bg-green-500 px-4 py-2 uppercase tracking-wider text-green-50 transition duration-300 ease-in-out hover:bg-green-600">
        Create
      </button>
    </form>
  );
}

export default TextInputButton;
