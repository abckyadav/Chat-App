export const formatDate = (date) => {
  const formattedDate = new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return formattedDate;
};
