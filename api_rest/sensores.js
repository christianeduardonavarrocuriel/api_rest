function getDatos() {
  var sensores = new EventSource("url_sensores"); // Reemplaza "url_sensores" con la URL de tu endpoint de sensores

  sensores.addEventListener("put", function (e) {
    var json = JSON.parse(e.data);
    console.log("Datos recibidos:", json);
    for (let key in json.data) {
      console.log("KEY: " + key);
      console.log("VALUE: " + json.data[key]);
      document.getElementById(key).textContent = json.data[key];
    }
  });
}