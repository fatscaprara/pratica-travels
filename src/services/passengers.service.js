import { getAllPassengersDB } from "../repositories/passenger.repository.js";

async function getPassengers(page) {
  let limit = 25;

  if (!page) {
    page = 1;
    limit = 100;
  }

  const offset = page > 1 ? page * limit : 0;

  const passengers = await getAllPassengersDB(offset, limit);

  return passengers.rows;
}

const oi = "oi";

export default {
  getPassengers,
  oi,
};
