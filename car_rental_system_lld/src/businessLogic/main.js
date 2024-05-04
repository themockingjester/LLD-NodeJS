const { VehicleRentalSystem } = require("./vehicleRentalSystem");
const { Location } = require("../entities/location");
const {
  VEHICLE_CATEGORY,
  VEHICLE_TYPES,
  VEHICLE_STATUS,
} = require("../constants/vehicleConstants");
const { ReservationManagement } = require("./reservationManagement");
const { ACCEPTED_PAYMENT_TYPES } = require("../constants/paymentConstants");
main = () => {
  // initializing rantal system
  const vehicleRentalSystem = new VehicleRentalSystem();
  // initializing reservation management ststem
  const ReservationManagementSystem = new ReservationManagement();
  const location1 = new Location();
  location1
    .setAddress("Balewadi Highstreet Pune")
    .setCity("Pune")
    .setState("Maharashtra")
    .setCountry("India");
  // Adding 1 st store
  const store1 = vehicleRentalSystem.addStore("7896452342", location1);

  // Adding vehicles to store
  store1.carInventoryMangement.addVehicle(
    "MH-34534534",
    VEHICLE_TYPES.CAR.SEDAN,
    VEHICLE_CATEGORY.CAR,
    VEHICLE_STATUS.AVAILABLE
  );
  store1.carInventoryMangement.addVehicle(
    "MH-465353456543",
    VEHICLE_TYPES.CAR.SEDAN,
    VEHICLE_CATEGORY.CAR,
    VEHICLE_STATUS.AVAILABLE
  );
  store1.carInventoryMangement.addVehicle(
    "MH-23423423423334232",
    VEHICLE_TYPES.CAR.XUV,
    VEHICLE_CATEGORY.CAR,
    VEHICLE_STATUS.AVAILABLE
  );

  // Adding user
  const user1 = vehicleRentalSystem.addUser(
    "Yash",
    "5667845632",
    "Pune, Maharashtra"
  );

  //Getting vehicle for reservation
  const requestedVehicles = store1.carInventoryMangement.getVehicle({
    category: VEHICLE_CATEGORY.CAR,
    type: VEHICLE_TYPES.CAR.XUV,
    status: VEHICLE_STATUS.AVAILABLE,
  });
  if (requestedVehicles.length == 0) {
    console.log(`Seems like no matching vehicle found`);
  } else {
    const vehicle1 = requestedVehicles[0];
    // Creating Reservation
    const reservation1 = ReservationManagementSystem.bookVehicle(
      vehicle1,
      user1.id,
      location1,
      12,
      new Date().toLocaleDateString(),
      store1,
      {
        type: ACCEPTED_PAYMENT_TYPES.UPI,
        details: {
          upiId: "abc2353@hdfc",
        },
      }
    );
    console.log(`User reservation details: `, reservation1);

    console.log(
      `Vehicles status after reservation in given store`,
      store1.carInventoryMangement.getVehicles()
    );
  }
};
main();
