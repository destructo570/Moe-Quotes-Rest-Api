function sendErrorResponse(error, _, res, _) {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message, data });
}

module.exports = sendErrorResponse;
