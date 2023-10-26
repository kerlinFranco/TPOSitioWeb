var app = new Vue({
    el: '#cargaPremios',
    data: {
        registros: [],
        registrosLocalStorage: {},
        registro1: null,
        registro2: null,
        registro3: null,
    },
    methods: {
        // Cargar datos del JSON
        cargarJson: function () {
            var jsonURL = 'https://saraza-wine-club.netlify.app/json/premios.json';
            console.log("A leer el JSON de premios");
            // Paso 1: Intentamos cargar los datos del JSON
            fetch(jsonURL)
                .then(response => response.json())
                .then(data => {
                    console.log("Datos de premios cargados con éxito");
                    console.log("Tenemos una banda de premios: " + data.length);

                    if (data.length > 0) {
                        this.registros = data;
                        console.log("Se guardaron los datos del JSON en nuestra memoria");
                        // Paso 2: Guardar los datos en nuestro almacén local
                        this.guardarEnLocalStorage();
                    } else {
                        console.log("Error - No hay premios en la lista.");
                    }
                })
                .catch(error => {
                    console.error('Algo salió mal al cargar los datos del JSON:', error);
                });
        },
            // Guardar datos en nuestro almacén local si no existen ya
            guardarEnLocalStorage: function () {
                if (this.registros.length > 0 && !localStorage.getItem('premiosRegistro')) {
                    localStorage.setItem('premiosRegistro', JSON.stringify(this.registros));
                    console.log('Ahi ya guardamos los datos JSON de los premios en nuestro localStorage');
                } else if (localStorage.getItem('premiosRegistro')) {
                    console.log('Ya tenemos datos en nuestro localStorage. No necesitamos sobrescribirlos.');
                } else {
                    console.log('No hay datos para guardar en nuestro localStorage');
                }
            },
        // Cargar datos de nuestra bodega local
        cargarLocalStorage: function () {
            var registros = JSON.parse(localStorage.getItem('premiosRegistro'));
            if (registros) {
                this.registrosLocalStorage = registros;
                console.log('Cargamos bien los datos de vinos desde nuestro localStorage');
            } else {
                console.log('No hay datos de vinos en nuestro localStorage para cargar. Volvamos al paso 1 por si fallo algo.');

                // Paso 1: Intentemos cargar el JSON nuevamente
                this.cargarJson();
            }
        },
        // Elegir dos vinos al azar y mostrarlos
        elegirRegistrosAlAzar: function () {
            if (Object.keys(this.registrosLocalStorage).length > 0) {
                var keys = Object.keys(this.registrosLocalStorage);
                var indice1 = Math.floor(Math.random() * keys.length);
                var indice2 = Math.floor(Math.random() * keys.length);
                var indice2 = Math.floor(Math.random() * keys.length);

                this.registro1 = this.registrosLocalStorage[keys[indice1]];
                this.registro2 = this.registrosLocalStorage[keys[indice2]];
                this.registro2 = this.registrosLocalStorage[keys[indice2]];

                console.log('Elegimos tres premios al azar para mostrar en PREMIOS Y DISTINCIONES');
                console.log('Premio: ' + this.registro1);
                console.log('Premio: ' + this.registro2);
                console.log('Premio: ' + this.registro3);
            } else {
                console.log('No hay datos de premios en nuestro localStorage para elegir al azar. Debe haber fallado el JSON.');
            }
        }
    },
});

// Ejecutamos las funciones necesarias
app.cargarLocalStorage();
app.elegirRegistrosAlAzar();