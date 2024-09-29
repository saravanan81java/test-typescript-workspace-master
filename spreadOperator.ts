//Combine two objects with Spread ... operator
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  console.log(myUpdatedVehicle)

  //Combine two array with spread operator

  const arr = ["Arun"]
  const arr1 = ["Vaishu"]

  const newArray = [...arr,...arr1]
  console.log(newArray)