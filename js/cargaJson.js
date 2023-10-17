
<!DOCTYPE html>
<html>
<head>
    <title>Tu Página Web</title>
</head>
<body>
    <!-- Contenido de tu página web -->
    
    <div id="app"></div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            new Vue({
                el: '#app',
                created: function() {
                    console.log("Iniciando carga del JSON...");
                    
                    var registros = {};
                    var indice = 1;
                    var jsonURL = 'https://saraza-wine-club.netlify.app/json/vinos.json';

                    fetch(jsonURL)
                        .then(response => response.json())
                        .then(data => {
                            console.log("JSON cargado correctamente.");
                            console.log("Cantidad de registros en este paso:", data.length);

                            if (data.length > 0) {
                                registros[indice] = data;
                                console.log("Registro agregado con ID:", indice);

                                indice++;
                                console.log("Nuevo índice:", indice);

                                // Continúa cargando registros
                                // (Vue.js actualizará automáticamente los cambios en el objeto)
                            } else {
                                console.log("No hay más registros en el JSON.");

                                localStorage.setItem('wineRecords', JSON.stringify(registros));
                                console.log('Registros de vinos guardados en localStorage.');
                            }
                        })
                        .catch(error => {
                            console.error('Error al cargar el archivo JSON:', error);
                        });
                }
            });
        });
    </script>
</body>
</html>
