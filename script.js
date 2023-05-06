//Project : Digital Clock


/**
 * @function reloj
 * @returns html with the date and time
 */
function reloj() {
    // Obtenemos la fecha del sistema
    fechaDeHoy = new Date();

    // Obtenemos dia de la semana, dia del mes, mes y año
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']; //Dias de la semana en letras
    // let numDay = fechaDeHoy.getDay();
    // let diaLetras = dias[numDay];
    let diaLetras = dias[(fechaDeHoy.getDay())]; //Dia de la semana

    let diaDelMes = fechaDeHoy.getDate(); // Dia del mes

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'] //Meses en letras
    let mesLetras = meses[(fechaDeHoy.getMonth())]; //Mes

    let anyo = fechaDeHoy.getUTCFullYear(); // Año

    // Salida del programa de la fecha
    document.getElementById('date').innerHTML = `<p>${diaLetras}, ${diaDelMes} de ${mesLetras} de ${anyo}</p>`;

    // Obtenemos la hora, minutos y segundos
    let hora = fechaDeHoy.getHours();
    let min = fechaDeHoy.getMinutes();
    let seg = fechaDeHoy.getSeconds();

    // Condicional para añadir "0" cuando la hora, el minuto y el segundo sean menores que 10
    if ((hora >= 0) && (hora < 10)) {
        hora = "0" + hora;
    }
    if (min >= 0 && min < 10) {
        min = "0" + min;
    }
    if (seg >= 0 && seg < 10) {
        seg = "0" + seg;
    }
    //Salida del programa de la hora
    document.getElementById('time').innerHTML = hora + ':' + min + ':' + seg;
}

setInterval(reloj, 1000); // Actualizar cada 1 segundo (1 segundo = 1000 milisegundos)

reloj();