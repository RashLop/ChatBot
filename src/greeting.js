export function getGreetingByHour(date = new Date()) {
    const h = date.getHours();
        if (h >= 6 && h < 12) return "Buenos días";
        if (h >= 12 && h < 19) return "Buenas tardes";
        return "Buenas noches";
}

export function getTrato(genero, edadNum) {
        if (!Number.isFinite(edadNum) || edadNum < 0) return "";

    const g = (genero || "").toLowerCase();
        if (g === "m") {
        if (edadNum >= 30) return "señor";
        if (edadNum >= 18) return "Estimado";
            return "señorito";
    } else if (g === "f") {
        if (edadNum >= 30) return "señora";
        if (edadNum >= 18) return "Estimada";
            return "señorita";
    }
            return ""; 
}

export function buildGreeting(nombre, genero, edad, date = new Date()) {
    const saludoHora = getGreetingByHour(date);
    const edadNum = Number(edad);
    const trato = getTrato(genero, edadNum);


        if (trato) {
            return `${saludoHora}, ${trato} "${nombre}"`;
        } else {
            return `${saludoHora} "${nombre}"`;
        }
}