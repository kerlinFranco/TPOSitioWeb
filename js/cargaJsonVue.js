var app = new Vue({
    el: '#app',
    data: {
        registros: {},
        registro1: null,
        registro2: null,
        jsonURL: 'https://saraza-wine-club.netlify.app/json/vinos.json',
    },
    methods: {
        cargaJson: function () {
            console.log("Iniciando carga del JSON...");
            return fetch(this.jsonURL)
                .then(response => response.json())
                .then(data => {
                    console.log("JSON cargado correctamente.");
                    console.log("Cantidad de registros en este paso:", data.length);

                    if (data.length > 0) {
                        this.registros = data;
                        console.log("Registros cargados:", this.registros);
                    } else {
                        console.log("No hay registros en el JSON.");
                    }
                })
                .catch(error => {
                    console.error('Error al cargar el archivo JSON:', error);
                });
        },
        elige2AlAzar: function () {
            return new Promise((resolve, reject) => {
                this.cargaJson()
                    .then(() => {
                        var keys = Object.keys(this.registros);
                        var indice1 = Math.floor(Math.random() * keys.length);
                        var indice2 = Math.floor(Math.random() * keys.length);

                        this.registro1 = this.registros[keys[indice1]];
                        this.registro2 = this.registros[keys[indice2]];

                        console.log('Función elige2AlAzar ejecutada');
                        resolve();
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        }
    }
});

// Ejecuta la función elige2AlAzar
app.elige2AlAzar()
    .then(() => {
        // Realiza cualquier acción adicional después de cargar los registros
    })
    .catch(error => {
        console.error('Error al ejecutar elige2AlAzar:', error);
    });