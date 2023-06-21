import connection from "../database/database.js";

export function getAllPassengersDB(offset, limit) {
  return connection.query(
    `
      SELECT
        p."fullName", COUNT(pt."travelId") as travels
      FROM
        passenger_travels pt
      JOIN
        passengers p
      ON
        p.id = pt."passengerId"
      GROUP BY
        p.id
      ORDER BY
        travels
      DESC
      OFFSET $1
      LIMIT $2;
    `,
    [offset, limit]
  );
}
