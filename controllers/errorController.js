exports.centralErrorHandler = async (err, req, res, next) => {
  res.json({ message: "Error Occures", error: err.message });
};
