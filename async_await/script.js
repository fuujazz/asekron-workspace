// const fun = async () => {
//   return "hello";
// };

// console.log(fun());

// fun().then((res) => console.log(res));
var isErr = true;

const getCategory = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isErr) {
        resolve("phone");
      } else {
        reject("error");
      }
    }, 1000);
  });
};

const getProducts = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`5 products in ${category}`);
    }, 1000);
  });
};

getCategory()
  .then(getProducts)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const getProduct = async () => {
  try {
    let category = await getCategory();
    let result = await getProducts(category);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

getProduct();
