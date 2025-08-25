export function getGreeting(nombre, genero, date = new Date()) {
        const h = date.getHours(); // 0–23
        let saludoHora = "";

    if (h >= 6 && h < 12) saludoHora = "Buenos días";
    else if (h >= 12 && h < 19) saludoHora = "Buenas tardes";
    else saludoHora = "Buenas noches";

    let trato = "";
    if (genero === "M" || genero === "m") {
        trato = "Señor";
    } else if (genero === "F" || genero === "f") {
        trato = "Señorita";
    } 

    return `${saludoHora}, ${trato} "${nombre}"`;
}