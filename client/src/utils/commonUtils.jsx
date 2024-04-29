export const formatDate = (date) => {
  const formattedDate = new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return formattedDate;
};

export const PdfNameExtract = (str) => {
  const parts = str.split("/");

  // Extract the last element (assuming the filename is the last part)
  const filename = parts[parts.length - 1];

  // Remove the extension (".pdf")
  // const name = filename.split(".")[0];

  return filename;
};

export const downloadMedia = async (e, url) => {
  e.preventDefault();

  try {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = downloadUrl;

        const name = PdfNameExtract(url);
        console.log("name:", name);

        a.download = "" + name + "";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(downloadUrl);
      })
      .catch((error) => {
        console.log("Error in downloading", error.message);
      });
  } catch (error) {
    console.log("Error in downloading", error.message);
  }
};
