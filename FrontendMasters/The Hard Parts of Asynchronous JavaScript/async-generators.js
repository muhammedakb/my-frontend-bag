function doWhenDataReceived(value) {
  returnNextElement2.next(value);
}

function* createFlow() {
  const data = yield fetch('https://fakestoreapi.com/products');
  console.log(data);
}

const returnNextElement2 = createFlow();
const futureData = returnNextElement2.next();

futureData.value.then((res) => res.json()).then(doWhenDataReceived);
