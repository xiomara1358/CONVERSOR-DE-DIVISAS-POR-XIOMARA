const SELECT_FROM = document.querySelector("#from"),
      SELECT_TO = document.querySelector("#to"),
      CHANGE = document.querySelector("i"),
      CONVERTIR = document.querySelector("#submit"),
      CANTIDAD = document.querySelector("#importe"),
      ERROR_MSG = document.querySelector("#errorMsg"),
      RESULTADO = document.querySelector("#resultado"),
      INFO = document.querySelector("#info");



const nombresMoneda = {
  USD: "Dólar Estadounidense",
  AUD: "Dólar Australiano",
  CAD: "Dólar Canadiense",
  CHF: "Franco Suizo",
  CNY: "Yuan Chino",
  EUR: "Euro",
  GBP: "Libra Esterlina",
  HKD: "Dólar de Hong Kong",
  IDR: "Rupia Indonesia",
  INR: "Rupia India",
  JPY: "Yen Japonés",
  KRW: "Won Surcoreano",
  MYR: "Ringgit Malayo",
  NZD: "Dólar Neozelandés",
  PHP: "Peso Filipino",
  SGD: "Dólar de Singapur",
  THB: "Baht Tailandés",
  TWD: "Nuevo Dólar Taiwanés",
  VND: "Dong Vietnamita",
  DKK: "Corona Danesa",
  EGP: "Libra Egipcia",
  ILS: "Nuevo Séquel Israelí",
  JOD: "Dinar Jordano",
  LBP: "Libra Libanesa",
  NOK: "Corona Noruega",
  SEK: "Corona Sueca",
  ZAR: "Rand Sudafricano",
  AED: "Dirham de los Emiratos Árabes Unidos",
  AZN: "Manat Azerbaiyano",
  BDT: "Taka Bangladesí",
  BGN: "Lev Búlgaro",
  CZK: "Corona Checa",
  DZD: "Dinar Argelino",
  GEL: "Lari Georgiano",
  HUF: "Florín Húngaro",
  KZT: "Tenge Kazajo",
  MDL: "Leu Moldavo",
  MXN: "Peso Mexicano",
  PLN: "Zloty Polaco",
  RON: "Leu Rumano",
  RSD: "Dinar Serbio",
  SAR: "Riyal Saudí",
  TND: "Dinar Tunecino",
  TRY: "Lira Turca",
  UAH: "Grivna Ucraniana",
  BRL: "Real Brasileño",
  BYN: "Rublo Bielorruso",
  ISK: "Corona Islandesa",
  PKR: "Rupia Pakistaní",
  XAF: "Franco CFA de África Central",
  XOF: "Franco CFA de África Occidental",
  AFN: "Afgani Afgano",
  ALL: "Lek Albanés",
  AMD: "Dram Armenio",
  AOA: "Kwanza Angoleño",
  ARS: "Peso Argentino",
  AWG: "Florín Arubeño",
  BAM: "Marco Convertible de Bosnia-Herzegovina",
  BBD: "Dólar de Barbados",
  BHD: "Dinar Bareiní",
  BIF: "Franco Burundés",
  BND: "Dólar de Brunéi",
  BOB: "Boliviano",
  BSD: "Dólar Bahameño",
  BWP: "Pula Botsuano",
  BZD: "Dólar de Belice",
  CDF: "Franco Congoleño",
  CLP: "Peso Chileno",
  COP: "Peso Colombiano",
  CRC: "Colón Costarricense",
  CUP: "Peso Cubano",
  CVE: "Escudo Caboverdiano",
  DJF: "Franco Yibutiano",
  DOP: "Peso Dominicano",
  ERN: "Nakfa Eritreo",
  ETB: "Birr Etíope",
  FJD: "Dólar Fiyiano",
  GHS: "Cedi Ghanés",
  GIP: "Libra de Gibraltar",
  GMD: "Dalasi Gambiano",
  GNF: "Franco Guineano",
  GTQ: "Quetzal Guatemalteco",
  GYD: "Dólar Guyanés",
  HNL: "Lempira Hondureño",
  HTG: "Gourde Haitiano",
  IQD: "Dinar Iraquí",
  JMD: "Dólar Jamaiquino",
  KES: "Chelín Keniano",
  KGS: "Som Kirguís",
  KHR: "Riel Camboyano",
  KMF: "Franco Comorense",
  KWD: "Dinar Kuwaití",
  LKR: "Rupia de Sri Lanka",
  LRD: "Dólar Liberiano",
  LSL: "Loti Lesothense",
  LYD: "Dinar Libio",
  MAD: "Dirham Marroquí",
  MGA: "Ariary Malgache",
  MKD: "Denar Macedonio",
  MMK: "Kyat Birmano",
  MNT: "Tugrik Mongol",
  MOP: "Pataca de Macao",
  MRU: "Ouguiya Mauritana",
  MUR: "Rupia de Mauricio",
  MVR: "Rufiyaa Maldiva",
  MWK: "Kwacha Malauí",
  MZN: "Metical Mozambicano",
  NAD: "Dólar Namibio",
  NGN: "Naira Nigeriana",
  NIO: "Córdoba Nicaragüense",
  NPR: "Rupia Nepalí",
  OMR: "Rial Omaní",
  PAB: "Balboa Panameño",
  PEN: "Sol Peruano",
  PGK: "Kina Papuana",
  PYG: "Guaraní Paraguayo",
  QAR: "Riyal Catarí",
  RWF: "Franco Ruandés",
  SBD: "Dólar Salomonense",
  SCR: "Rupia Seychellense",
  SDG: "Libra Sudanesa",
  SOS: "Chelín Somalí",
  SRD: "Dólar Surinamés",
  SSP: "Libra Sursudanesa",
  STN: "Dobra de Santo Tomé y Príncipe",
  SVC: "Colón Salvadoreño",
  SZL: "Lilangeni Suazi",
  TJS: "Somoni Tayiko",
  TMT: "Manat Turcomano",
  TOP: "Paʻanga Tongano",
  TTD: "Dólar de Trinidad y Tobago",
  TZS: "Chelín Tanzano",
  UGX: "Chelín Ugandés",
  UYU: "Peso Uruguayo",
  UZS: "Som Uzbeco",
  VES: "Bolívar Venezolano",
  VUV: "Vatu Vanuatuense",
  WST: "Tala Samoano",
  XCD: "Dólar del Caribe Oriental",
  XCG: "Moneda de prueba",
  XPF: "Franco CFP",
  YER: "Rial Yemení",
  ZMW: "Kwacha Zambiano",
  RUB: "Rublo Ruso",
  IRR: "Rial Iraní",
  LAK: "Kip Lao",
  SYP: "Libra Siria"
};

// Función para mostrar errores
const mostrarError = (el,msg)=>{
  ERROR_MSG.textContent = msg; 
  ERROR_MSG.className = "errorMensaje"; 
  el.className = "error"; 
  el.focus();
};

// Borrar errores
const borrarError = ()=>{
  document.forms[0].querySelectorAll("input,select").forEach(el=>el.className=""); 
  ERROR_MSG.textContent=""; 
  ERROR_MSG.className="";
};

// Validar cantidad
const validarCantidad = ()=>{
  if(!CANTIDAD.checkValidity()){
    const v = CANTIDAD.validity;
    if(v.valueMissing) mostrarError(CANTIDAD,"Tienes que introducir una cantidad");
    else if(v.rangeOverflow) mostrarError(CANTIDAD,"La cantidad no puede ser mayor de 1.000.000");
    else if(v.rangeUnderflow) mostrarError(CANTIDAD,"La cantidad no puede ser menor de 0");
    return false;
  }
  return true;
};

// Calcular tasa de cambio
const calcularTasaCambio = (e)=>{
  e?.preventDefault();
  borrarError();
  if(!validarCantidad()) return;
  const from = monedas[opcionFrom-1], 
        to = monedas[opcionTo-1], 
        cantidad = parseFloat(CANTIDAD.value), 
        tasa = from.precio / to.precio;
        


  RESULTADO.innerHTML = `${cantidad} ${from.siglas} son <b>${(cantidad/tasa).toFixed(4)}</b> ${to.siglas}`;
  INFO.innerHTML = `1 ${from.siglas} = ${tasa.toFixed(4)} ${to.siglas}<br>1 ${to.siglas} = ${(1/tasa).toFixed(4)} ${from.siglas}`;
};

// Crear selects ordenados alfabéticamente
const crearSelectsOptions = ()=>{
  // Ordenar monedas por nombre
  monedas.sort((a,b)=>{
    const nombreA = nombresMoneda[a.siglas] || a.siglas;
    const nombreB = nombresMoneda[b.siglas] || b.siglas;
    return nombreA.localeCompare(nombreB,"es");
  });

  SELECT_FROM.innerHTML = "";
  SELECT_TO.innerHTML = "";

  monedas.forEach((m,i)=>{
    const nombre = nombresMoneda[m.siglas] || "";
    const op = new Option(`${m.siglas} (${nombre})`, i+1);
    SELECT_FROM.add(op);

    const copia = op.cloneNode(true); 
    if(i===0) copia.selected = true; // Por defecto la primera opción
    SELECT_TO.add(copia);
  });
};

// Cargar monedas desde FloatRates
const cargarMonedas = async ()=>{
  try {
    const res = await fetch("https://www.floatrates.com/daily/usd.xml");
    const text = await res.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text,"application/xml");

    monedas = [];
    const monedasDeseadas = Object.keys(nombresMoneda);

    const items = [...xml.getElementsByTagName("item")];
    items.forEach(item=>{
      const siglas = item.getElementsByTagName("targetCurrency")[0].textContent;
      const precio = parseFloat(item.getElementsByTagName("exchangeRate")[0].textContent);
      if(monedasDeseadas.includes(siglas)){
        monedas.push({siglas, precio});
      }
    });

    if(!monedas.find(m=>m.siglas==="USD")){
      monedas.unshift({siglas:"USD", precio:1});
    }

    crearSelectsOptions();
  } catch(e){
    mostrarError(CANTIDAD,"Error cargando las monedas");
    console.error(e);
  }
};

// Eventos
CONVERTIR.addEventListener("click", calcularTasaCambio);
SELECT_FROM.addEventListener("change", e=>{ opcionFrom=e.target.value; calcularTasaCambio(); });
SELECT_TO.addEventListener("change", e=>{ opcionTo=e.target.value; calcularTasaCambio(); });
CHANGE.addEventListener("click", ()=>{
  [opcionFrom,opcionTo]=[opcionTo,opcionFrom]; 
  [SELECT_FROM.value,SELECT_TO.value]=[opcionFrom,opcionTo]; 
  calcularTasaCambio(); 
});

// Inicializar
cargarMonedas();

