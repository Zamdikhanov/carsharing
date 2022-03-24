function formatDate(date) {
    const dateObject = new Date(date);
    const day = dateObject.getDate();
    const month = dateObject.getMonth();
    const formatedMonth = month + 1 < 10 ? `0${month + 1}` : month + 1;
    const year = dateObject.getFullYear();
    const hour = dateObject.getHours();
    const formatedHour = hour < 10 ? `0${hour}` : hour;
    const minute = dateObject.getMinutes();
    const formatedMinute = minute < 10 ? `0${minute}` : minute;
    return `${day}.${formatedMonth}.${year}  ${formatedHour}:${formatedMinute}`;
}

export default formatDate;
