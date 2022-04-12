document.querySelector("#get-employee").addEventListener("click", loadEmployee);

function loadEmployee() {
  let loadImage = document.querySelector("#loading");
  loadImage.style.display = "block";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "employees.json", true);

  setTimeout(() => {
    xhr.onload = function () {
      loadImage.style.display = "none";
      if (this.status === 200) {
        let employees = JSON.parse(this.responseText);
        console.log(typeof employees);
        console.log(employees.employees[0]);

        employees.employees.forEach((element) => {
          let html = `
            <tr>    
                <td>${element.firstname}</td>
                <td>${element.lastname}</td>
                <td>${element.age}</td>
                <td>${element.retired ? "emekli" : "emekli değil"}</td>
            </tr>
        `;
          document.querySelector("#employees").innerHTML += html;
        });
      }
    };

    xhr.send();
  }, 2500);
}
