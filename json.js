document.querySelector("#get-employee").addEventListener("click", loadEmployee);

function loadEmployee() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "employees.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      let employees = JSON.parse(this.responseText);
      console.log(typeof employees);
      console.log(employees.employees[0]);
      //   let html = `
      //         <tr>
      //             <td>${employees.firstname}</td>
      //             <td>${employees.lastname}</td>
      //             <td>${employees.age}</td>
      //             <td>${employees.retired ? "emekli" : "emekli değil"}</td>
      //         </tr>
      //     `;
      //   document.querySelector("#employees").innerHTML += html;

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
}
