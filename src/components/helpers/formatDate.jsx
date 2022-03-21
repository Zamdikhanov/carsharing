function formatDate(date) {
    const dateObject = new Date(date)
    const day = dateObject.getDate();
    const month = dateObject.getMonth();
    const formatedMonth = (month + 1) < 10 ? (`0${month + 1}`) : (month + 1);
    const year = dateObject.getFullYear();
    const hour = dateObject.getHours();
    const minute = dateObject.getMinutes();
    return (`${day}.${formatedMonth}.${year}  ${hour}:${minute}`);
}

export default formatDate;