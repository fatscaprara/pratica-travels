import passengerServices from "../services/passengers.service.js";

export async function getPassengers(req, res) {
  try {
    const { page } = req.query;
    const passengers = await passengerServices.getPassengers(page);

    res.send(passengers);
  } catch (err) {
    console.log("Too many requests");
    return res.sendStatus(500);
  }
}
