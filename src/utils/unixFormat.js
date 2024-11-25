export default function unixFormat(unixDate) {
  if (!unixDate) return "";
  const newDate = new Date(unixDate * 1000);
  const options = {
    dateStyle: "medium",
    timeStyle: "long",
  };
  const intlDateTimeFormat = new Intl.DateTimeFormat("id-ID", options);

  return intlDateTimeFormat.format(newDate);
}
