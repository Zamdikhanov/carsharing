function priceCalc(
    startDate,
    endDate,
    selectedRate,
    carModel,
    additionalServices,
) {
    let price = carModel.priceMin || 0;
    const intervalInMsc = endDate - startDate;
    let interval;
    switch (selectedRate.rateTypeId.unit) {
        case 'сутки':
            interval = Math.ceil(intervalInMsc / (1000 * 60 * 60 * 24));
            break;
        case '7 дней':
            interval = Math.ceil(intervalInMsc / (1000 * 60 * 60 * 24 * 7));
            break;
        case '30 дней':
            interval = Math.ceil(intervalInMsc / (1000 * 60 * 60 * 24 * 30));
            break;
        case 'мин':
            interval = Math.ceil(intervalInMsc / (1000 * 60));
            break;
        default:
            interval = 0;
    }

    if (startDate && endDate) {
        price =
            price +
            interval * selectedRate.price +
            (additionalServices[0].value && additionalServices[0].price) +
            (additionalServices[1].value && additionalServices[1].price) +
            (additionalServices[2].value && additionalServices[2].price);
    }
    return price < carModel.priceMax ? price : carModel.priceMax;
}

export default priceCalc;
