function updateDate() {
  const today = new Date();
  const options = {
    year: "numeric",
  };
  const formattedDate = today.toLocaleDateString(undefined, options);
  document.getElementById("currentDate").innerText = formattedDate;
}
updateDate();
