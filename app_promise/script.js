// var p = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("success");
//   } else {
//     reject("Failure");
//   }
// });

// p.then((data) => {
//   console.log(data);
// }).catch((err) => {
//     console.log(error)
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 1000);
// })
//   .then((num) => {
//     console.log(num);
//     return num * num;
//   })
//   .then((num) => {
//     console.log(num);
//     return num ** 2;
//   })
//   .then((num) => {
//     console.log(num);
//   });

// const isMomHappy = true;

// const willGetNewPhone = new Promise((resolve, reject) => {
//   if (isMomHappy) {
//     const phone = {
//       name: "IPhone 8",
//       price: 4000,
//       color: "silver",
//     };
//     resolve(phone);
//   } else {
//     const error = new Error("mom is not happy");
//     reject(error);
//   }
// });

// const showPhone = (phone) => {
//   const message = "Hey friends this is my new phone " + phone.name;
//   return Promise.resolve(message);
// };

// const askMom = () => {
//   willGetNewPhone
//     .then(showPhone)
//     .then((message) => console.log(message))
//     .catch((error) => {
//       console.log(error);
//     });
// };

// askMom();

let myObj = {
  // method: "POST",
  url: "https://randomuser.me/api/?results=5",
  headers: { "content-type": "application/json" },
  body: {
    name: "kagan",
    age: 18,
  },
};

let request = (obj) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open(obj.method || "GET", obj.url, true);

    if (xhr.headers) {
      Object.keys[obj.headers].forEach((key) => {
        xhr.setRequestHeader(key, obj.headers[key]);
      });
    }

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.onerror = () => {
      reject(xhr.statusText);
    };

    xhr.send(obj.body);
  });
};

var buildHtml = (data) => {
  let users = JSON.parse(data);
  let html = "";
  console.log(users.results);
  users.results.forEach((user) => {
    html += `
            <div>
                <img src="${user.picture.medium}>
                <div>
                    ${user.name.title}, ${user.name.first}, ${user.name.last}
                </div>
            
            </div>
      
        
        `;
  });
  document.querySelector("#users").innerHTML = html;

  return Promise.resolve("Html is loaded");
};

request(myObj)
  .then(buildHtml)
  .then((message) => console.log(message))
  .catch((error) => {
    console.log(error);
  });
