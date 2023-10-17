<!DOCTYPE html>
<html>
<head>
    <title>Mi Página con JSON</title>
    <style>
        /* Estilos CSS para las tarjetas */
        .tarjeta {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 10px;
            display: inline-block;
        }
    </style>
</head>
<body>
    <div id="app">
        <div class="contenedor">
            <!-- Tarjeta para el primer registro (ID=destacado) -->
            <div class="tarjeta destacado" v-if="registro1">
                <img :src="registro1['fotoDestacado']" :alt="registro1.nombre">
                <h2>{{ registro1.nombre }}</h2>
                <p>{{ registro1.descripcion }}</p>
                <a :href="registro1.link" class="enlace-tienda">Ver más</a>
            </div>

            <!-- Tarjeta para el segundo registro (ID=ofertaClub) -->
            <div class="tarjeta ofertaClub" v-if="registro2">
                <img :src="registro2['fotoTarjetaOfertaClub']" :alt="registro2.nombre">
                <h2>{{ registro2.nombre }}</h2>
                <p>Precio de descuento para socios: ${{ registro2['precioClub'] }}</p>
                <a :href="registro2.link" class="enlace-tienda">Ver más</a>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>

    <script>
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
    </script>
</body>
</html>
