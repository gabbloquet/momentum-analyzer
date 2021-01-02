export const clearForm = () => {
    document.getElementsByTagName("form")[0].reset();
}

export const isAnEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
}

export const getDateWithMonthAgo = (today, monthAgo) => {
    const monthsToSubstract = monthAgo - 1;
    let dateWithMonthAgo = new Date(today.getFullYear(),today.getMonth() - monthsToSubstract,0);
    dateWithMonthAgo.setDate( Math.min(today.getDate(), dateWithMonthAgo.getDate()) );
    return dateWithMonthAgo;
}

export const dateTimeToDate = (dateTime) => {
    return dateTime.toISOString().slice(0,10);
}
