let apiKanaps, apiOrder;

const { hostname } = window.location;

// if (hostname === 'localhost') {
//   apiKanaps = 'http://localhost:3000/api/products/';
//   apiOrder = 'http://localhost:3000/api/products/order/';
// } else {
//   apiKanaps = 'https://kanap-backend.herokuapp.com/api/products/';
//   apiOrder = 'https://kanap-backend.herokuapp.com/api/products/order/';
// }


apiKanaps = 'https://kanap-backend.herokuapp.com/api/products/';
apiOrder = 'https://kanap-backend.herokuapp.com/api/products/order/';



export { apiKanaps, apiOrder };