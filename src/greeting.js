// greeting.js
export function getGreetingByHour(date = new Date(), idioma = "es") {
    const h = date.getHours();
        if (idioma === "en") {
        if (h >= 6 && h < 12) return "Good morning";
        if (h >= 12 && h < 19) return "Good afternoon";
            return "Good evening";
        } else {
        if (h >= 6 && h < 12) return "Buenos días";
        if (h >= 12 && h < 19) return "Buenas tardes";
        return "Buenas noches";
    }
}   

export function getTrato(genero, edadNum, idioma = "es") {
        if (!Number.isFinite(edadNum) || edadNum < 0) return "";

    const g = (genero || "").toLowerCase();

        if (idioma === "en") {
        if (g === "m") {
        if (edadNum >= 30) return "Mr.";
        if (edadNum >= 18) return "Sir";
            return "young man";
        } else if (g === "f") {
        if (edadNum >= 30) return "Mrs.";
        if (edadNum >= 18) return "Miss";
            return "young lady";
        }
        } else {
        if (g === "m") {
        if (edadNum >= 30) return "señor";
        if (edadNum >= 18) return "Estimado";
            return "señorito";
        } else if (g === "f") {
        if (edadNum >= 30) return "señora";
        if (edadNum >= 18) return "Estimada";
            return "señorita";
    }
}

            return "";
}

export function buildGreeting(nombre, genero, edad, idioma = "es", date = new Date()) {
    const saludoHora = getGreetingByHour(date, idioma);
    const edadNum = Number(edad);
    const trato = getTrato(genero, edadNum, idioma);

        if (trato) {  
            return `${saludoHora}, ${trato} "${nombre}"`;
        } else {
            return `${saludoHora} "${nombre}"`;
    }
}
