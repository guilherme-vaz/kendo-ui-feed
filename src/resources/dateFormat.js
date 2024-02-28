
export function formatDate(month, day, year) {

    if (isNaN(month) || isNaN(day) || isNaN(year)) {
        return 'Invalid date';
    }


    if (day < 1 || day > 31 || month < 1 || month > 12) {
        return 'Invalid date';
    }

    const formattedDate = new Date(year, month - 1, day);


    if (isNaN(formattedDate.getTime())) {
        return 'Invalid date';
    }

    const formattedString = `${(month < 10 ? '0' : '') + month}/${(day < 10 ? '0' : '') + day}/${year}`;
    return formattedString;
}
