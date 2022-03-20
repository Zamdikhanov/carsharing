function getFormattedInterval(time) {
    if (time === null || time < 0) {
        return '';
    }
    const msec = time % 1000;
    let interval = Math.ceil((time - msec + 1) / 1000);
    const sec = interval % 60;
    interval = Math.ceil((interval - sec) / 60);
    const min = interval % 60;
    interval = Math.ceil((interval - min) / 60);
    const hour = interval % 24;
    interval = Math.ceil((interval - hour) / 24);
    const day = interval % 30;
    interval = Math.ceil((interval - day) / 30);
    const month = interval % 12;
    let result = '';
    if (month > 0) {
        result += `${month}мес`;
    }
    if (day > 0) {
        result += `${day}д`;
    }
    if (hour > 0) {
        result += `${hour}ч`;
    }
    if (min > 0) {
        result += `${min}мин`;
    }
    return result;
}

export default getFormattedInterval;
