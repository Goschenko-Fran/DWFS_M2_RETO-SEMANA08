const ventas = [
  {
    cliente: 'Juan',
    productos: [
      { nombre: 'smartphone', cantidad: 1, precio: 350 },
      { nombre: 'laptop', cantidad: 1, precio: 800 },
    ],
  },
  {
    cliente: 'Ana',
    productos: [
      { nombre: 'smartphone', cantidad: 2, precio: 350 },
      { nombre: 'cámara', cantidad: 1, precio: 250 },
    ],
  },
  {
    cliente: 'Pedro',
    productos: [
      { nombre: 'laptop', cantidad: 1, precio: 800 },
      { nombre: 'cámara', cantidad: 2, precio: 250 },
    ],
  },
];

// Respuestas.
// Cliente: Juan, Subtotal: $1150 / Cliente: Ana, Subtotal: $950 / Cliente: Pedro, Subtotal: $1300

// 1. Calcular el subtotal de cada venta
ventas.forEach(venta => {
  let subtotal = 0;
  venta.productos.forEach(producto => {
    subtotal += producto.cantidad * producto.precio;
  });
  console.log(`Cliente: ${venta.cliente}, Subtotal: $${subtotal}`);
});

// 2. Calcular el total de todas las ventas
let totalVentas = 0;
ventas.forEach(venta => {
  venta.productos.forEach(producto => {
    totalVentas += producto.cantidad * producto.precio;
  });
});
console.log(`Total de ventas: $${totalVentas}`);

// 3. Extraer todos los productos vendidos
let todosLosProductos = [];
ventas.forEach(venta => {
  venta.productos.forEach(producto => {
    todosLosProductos.push(producto.nombre);
  });
});
console.log('Todos los productos vendidos:', todosLosProductos);

// 4. Calcular cantidad de productos vendidos por categoría
let categorias = {
  smartphone: 0,
  laptop: 0,
  cámara: 0,
};

ventas.forEach(venta => {
  venta.productos.forEach(producto => {
    if (categorias.hasOwnProperty(producto.nombre)) {
      categorias[producto.nombre] += producto.cantidad;
    }
  });
});
console.log('Productos vendidos por categoría:', categorias);
// RESPUESTA QUE DEBE DAR
// { smartphone: 3, laptop: 2, cámara: 3 }