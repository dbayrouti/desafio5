class pais {
  constructor(nuevoNombre, nuevoIva) {
    this.nombre = nuevoNombre;
    this.iva = parseFloat(nuevoIva);
  }

  informacionPais() {
    return "Pais " + this.nombre + " IVA" + this.iva + "\n";
  }
}

/* const pais1 = new pais("Chile", 11.5);
const pais2 = new pais("Venezuela", 16);

console.log(chile.pais);
console.log(chile.iva);
console.log(venezuela.pais);
console.log(venezuela.iva);
 */
