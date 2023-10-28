export async function fetchQRCode(textOrUrl) {
  if (!textOrUrl) return;

  try {
    const res = await fetch(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textOrUrl}`,
    );
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);

    return imageObjectURL;
  } catch (err) {
    console.log(err);
  }
}
