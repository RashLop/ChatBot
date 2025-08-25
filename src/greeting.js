
export function getGreeting(date = new Date()) {
    const h = date.getHours(); // 
        if (h >= 6 && h < 12) return "Buenos días";
        if (h >= 12 && h < 19) return "Buenas tardes";
    return "Buenas noches";
}
