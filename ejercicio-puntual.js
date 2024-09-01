function actividadesEnComun(persona1, persona2) {
    let actividadesComunes = [];

    for (let i = 0; i < persona1.length; i++) {
        for (let j = 0; j < persona2.length; j++) {
            if (persona1[i] === persona2[j]) {
                actividadesComunes.push(persona1[i]);
            }
        }
    }
    return actividadesComunes;
}
// Realicé esta prueba para saber si funciona
let persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar'];
let persona2 = ['comer', 'dormir', 'futbol'];
console.log(actividadesEnComun(persona1, persona2));
