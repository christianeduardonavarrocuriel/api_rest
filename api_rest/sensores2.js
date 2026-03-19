async function getDatos() {
  const url = "https://apijs-c6fd3-default-rtdb.firebaseio.com/sucursal1.json";

  try {
    const response = await fetch(url);
    
    if (!response.ok) throw new Error("Error al obtener datos");

    const json = await response.json(); 
    
    console.log("Datos recibidos:", json);

    for (let key in json) {
        console.log("KEY: " + key);
        console.log("VALUE: " + json[key]);
        document.getElementById(key).textContent = json[key];
    }
  } catch (error) {
    console.error("Error en la petición:", error.message);
  }
}
// Llamar a la función para obtener datos cada 5 segundos

setInterval(getDatos, 5000);