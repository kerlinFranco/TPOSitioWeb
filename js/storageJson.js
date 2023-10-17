// Guardamos el array de objetos en localstorage para que lo accedan todas las paginas...

new Vue({
    el: '#app',
    data: {
        registro1: null,
        registro2: null
    },
    created: function () {
        // Paso 1: Recuperar los registros almacenados en el localStorage
        var registros = JSON.parse(localStorage.getItem('wineRecords'));

        // Paso 2: Seleccionar dos registros al azar
        var keys = Object.keys(registros);
        var indice1 = Math.floor(Math.random() * keys.length);
        var indice2 = Math.floor(Math.random() * keys.length);

        // Paso 3: Obtener los datos de los registros seleccionados
        this.registro1 = registros[keys[indice1]];
        this.registro2 = registros[keys[indice2]];
    }
});