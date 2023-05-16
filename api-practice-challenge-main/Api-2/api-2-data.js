const data = [
  {
    _id: "60795d4e0489a32f948c4167",
    name: "Honda Sedan",
    price: "132",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
    imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
  },
  {
    _id: "60795e440489a32f948c4168",
    name: "MitoSedan",
    price: "221",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
    imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
  },
  {
    _id: "60795fc20489a32f948c4169",
    name: "Isuzu Tacoma",
    price: "105",
    description:
      "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
    imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
  },
  {
    _id: "6079615d0489a32f948c416a",
    name: "Chevrolet Crossover",
    price: "434",
    description:
      "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
  },
];

console.log(data[0].imageURL); // black
console.log(data[0].name); // black
console.log(data[0].description); // black
console.log(data[0].price); // black

console.log(data[1].imageURL); // black
console.log(data[1].name); // black
console.log(data[1].description); // black
console.log(data[1].price); // black

const carContainer = document.getElementById("car-container");
const carDetails = document.createElement("div");






carDetails.innerHTML = `




<div class="col-sm-6 mb-3 mb-sm-0">
<div class="card">
  <div class="card-body">
  <img class="figure-img img-fluid rounded" src="${data[0].imageURL}" alt="">
    <h5 class="card-title">Car Name: ${data[0].name}</h5>
    <p class="card-text"> Car Details:${data[0].description} </p>
    <a href="#" class="btn btn-primary">Car Price: ${data[0].price}</a>
  </div>
</div>
</div>









<div class="col-sm-6 mb-3 mb-sm-0">
<div class="card">
  <div class="card-body">
  <img class="figure-img img-fluid rounded" src="${data[1].imageURL}" alt="">
    <h5 class="card-title">Car Name: ${data[1].name}</h5>
    <p class="card-text"> Car Details:${data[1].description} </p>
    <a href="#" class="btn btn-primary">Car Price: ${data[1].price}</a>
  </div>
</div>
</div>









`;

















carContainer.appendChild(carDetails);
