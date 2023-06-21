export function pageIsValid(req, res, next) {
  const { page } = req.query;
  if (isNaN(page) || page <= 0) {
    return res.status(400).send("Invalid page value");
  }

  next();
}
