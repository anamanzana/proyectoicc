import axios from "axios";

export default function handler(req, res) {
  if (req.method === "GET") {
    const options = {
      method: "GET",
      url: "https://country-info.p.rapidapi.com/search",
      params: { query: req.query.country },
      headers: {
        "X-RapidAPI-Host": "country-info.p.rapidapi.com",
        "X-RapidAPI-Key": '37f052898cmsh234d7288dd8fb0dp1ac617jsn8bd1eb59eea6',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  } else {
    res.status(400);
  }
}
