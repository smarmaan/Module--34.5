const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"],
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"],
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ],
};

console.log(person.result[0].address.street);

const personContainer = document.getElementById("person-container");
console.log(personContainer);
const personDataDiv = document.createElement("div");
personDataDiv.innerHTML = `
  
  
  <div class="col-sm-6">
  <div class="card">
      <div class="card-body">
          <h5 class="card-title">Person Name : ${person.result[0].name.common} </h5>
          <h5 class="card-title">age : ${person.result[0].age} </h5>
          <p class="card-text">Street: ${person.result[0].address.street}</p>
      </div>
  </div>
  </div>
  

  
  <div class="col-sm-6">
  <div class="card">
      <div class="card-body">
          <h5 class="card-title">Person Name : ${person.result[1].name.common} </h5>
          <h5 class="card-title">age : ${person.result[1].age} </h5>
          <p class="card-text">Street: ${person.result[1].address.street}</p>
      </div>
  </div>
  </div>
  








  `;
personContainer.appendChild(personDataDiv);
