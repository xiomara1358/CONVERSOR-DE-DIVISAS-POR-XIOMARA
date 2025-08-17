CONVERSION DE MONEDAS
# 📌 Conversor de Divisas  

Este proyecto es un **conversor de monedas online** desarrollado con **HTML**, **CSS** y **JavaScript**, que consume datos de la API de [FloatRates](https://www.floatrates.com/) en formato XML.  

Permite al usuario:  
- Seleccionar una moneda de origen y una de destino.  
- Ingresar un importe.  
- Convertir el valor a la divisa deseada.  
- Ver el tipo de cambio actualizado.  

---

## 🖼 Vista previa del proyecto  

### Interfaz Principal  
![Interfaz](imagenes/interfaz.png)  

### Resultado de Conversión  
![Resultado](imagenes/resultado.png)  

---



## 📂 Estructura del Proyecto  


📦 conversor-divisas
┣ 📜 index.html # Estructura principal (formulario)
┣ 📜 style.css # Estilos del diseño
┣ 📜 script.js # Lógica de la aplicación
┣ 📂 imagenes # Carpeta de imágenes locales
┃ ┣ 🖼 interfaz.png
┃ ┣ 🖼 resultado.png
┃ ┗ 🖼 responsive.png
┗ 📜 README.md # Documentación



---

## ⚙️ Tecnologías utilizadas  

- **HTML5** → Estructura del proyecto  
- **CSS3** → Estilos, responsive y diseño visual  
- **JavaScript (ES6+)** → Lógica de conversión y conexión con la API  
- **FloatRates API** → Proveedor de datos en tiempo real  

---

## 📝 Explicación del Código  

### 1️⃣ HTML (`index.html`)  

Incluye:  

✔️ **Título**: “CONVERSOR DE DIVISAS”  
✔️ **Formulario**: campo de cantidad, selector de moneda de origen y destino.  
✔️ **Botón de conversión**.  
✔️ **Resultados**: conversión + tasas de cambio.  

```html
<h1>CONVERSOR DE DIVISAS</h1>
<form>
  <input type="number" id="importe" placeholder="10.0" required>
  <select id="from"></select>
  <i class="fa-solid fa-right-left"></i>
  <select id="to"></select>
  <input type="submit" id="submit" value="Convertir" />
  <p id="resultado"></p>
  <p id="info"></p>
</form>


2️⃣ CSS (style.css)

✔️ Fondo suave (background-color: #e8c6ec;)
✔️ Botón estilizado con hover:
#submit {
  background-color: #20815c;
  color: #fff;
  border-radius: 25px;
}
#submit:hover {
  background-color: #d1cf57;
}
3️⃣ JavaScript (script.js)
✅ Variables principales
const SELECT_FROM = document.querySelector("#from");
const SELECT_TO = document.querySelector("#to");
const CONVERTIR = document.querySelector("#submit");
const CANTIDAD = document.querySelector("#importe");

✅ Carga de monedas desde la API
const cargarMonedas = async ()=>{
  const res = await fetch("https://www.floatrates.com/daily/usd.xml");
  const text = await res.text();
  const parser = new DOMParser();
  const xml = parser.parseFromString(text,"application/xml");
};

✅ Conversión
const calcularTasaCambio = (e)=>{
  e.preventDefault();
  const from = monedas[opcionFrom-1], 
        to = monedas[opcionTo-1],
        cantidad = parseFloat(CANTIDAD.value),
        tasa = from.precio / to.precio;

  RESULTADO.innerHTML = `${cantidad} ${from.siglas} son <b>${(cantidad*tasa).toFixed(4)}</b> ${to.siglas}`;
};

✅ Manejo de errores
const mostrarError = (el,msg)=>{
  ERROR_MSG.textContent = msg;
  ERROR_MSG.className = "errorMensaje";
  el.className = "error";
  el.focus();
};

🤖 Créditos adicionales

Durante el desarrollo se utilizó ChatGPT como apoyo para:

Simplificación y optimización de código.

Propuestas de modificaciones y mejoras.

Generación de imágenes y mockups de ejemplo para la documentación.


👨‍💻 Autor

✒️ Desarrollado por: Xiomara Martínez



