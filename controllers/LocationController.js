const getLocation = require("../utils/weatherApi");

exports.getLocationController = async (req, res) => {
  const { location } = req.query;
  const locationData = await getLocation(location);
  return res.status(200).json({
    country: locationData.location.country,
    city: locationData.location.city,
  });
};
