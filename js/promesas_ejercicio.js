// Ejercicio Práctico - Manejo de Promesas en JavaScript
// Autor: [Tu Nombre]

// 1. Promesa con setTimeout
console.log("Creando promesa");
const promesaPersona = new Promise((resolve, reject) => {
    console.log("Registrando promesa");
    setTimeout(() => {
        console.log("Esperando respuesta");
        const persona = {
            nombre: "Rubén",
            apellido: "Azócar",
            edad: 49,
            lugar: "San Pedro de la Paz"
        };
        resolve(persona);
    }, 2000);
});

promesaPersona.then(respuesta => {
    console.log("Respuesta:", respuesta);
});

// 2. Promesa que depende de los segundos actuales
function promesaSegundos() {
    return new Promise((resolve, reject) => {
        const fecha = new Date();
        const segundos = fecha.getSeconds();
        const hora = fecha.toLocaleTimeString();
        if (segundos > 30) {
            if (segundos % 2 === 0) {
                resolve(`Hora actual: ${hora}`);
            } else {
                reject(new Error(`Error: segundos (${segundos}) > 30 e impar`));
            }
        } else {
            if (segundos % 2 !== 0) {
                resolve(`Hora actual: ${hora}`);
            } else {
                reject(new Error(`Error: segundos (${segundos}) <= 30 y par`));
            }
        }
    });
}

promesaSegundos()
    .then(res => console.log(res))
    .catch(err => console.error(err.message));

// 3. Promesa con proceso pesado
console.log("Antes de la promesa pesada");
const promesaPesada = new Promise((resolve, reject) => {
    console.log("Iniciando proceso pesado...");
    // Proceso pesado
    let suma = 0;
    for (let i = 0; i < 1e9; i++) {
        suma += i;
    }
    resolve(suma);
});
promesaPesada.then(res => {
    console.log("Proceso pesado terminado. Resultado:", res);
    // Reflexión sobre el delay:
    // El delay ocurre porque el bucle bloquea el hilo principal de JS,
    // impidiendo que otros mensajes se muestren hasta que termina.
});
console.log("Después de la promesa pesada (este mensaje aparece después por el bloqueo)");
