const config = require("../config");
const axios = require("axios");

// const weatherstack_url = `${config.WEATHERSTACK_BASE_URL}/current?access_key=${config.WEATHERSTACK_API_KEY}&query=${location}`;

const params = {
  access_key: `${config.WEATHERSTACK_API_KEY}`,
  query: ``,
};

// axios
//   .get(`${config.WEATHERSTACK_BASE_URL}/current`, { params })
//   .then((response) => {
//     const apiResponse = response.data;
//     console.log(
//       `Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`
//     );
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const getLocation = async (location) => {
  try {
    const result = await axios.get(`${config.WEATHERSTACK_BASE_URL}/current`, {
      access_key: params.access_key,
      query: location,
    });
    return result.data;
  } catch (error) {
    console.log("Error with WeatherStack Api.\n", error);
  }
};

module.exports = getLocation;
