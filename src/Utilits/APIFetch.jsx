import axios from "axios";
const Base_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: Base_URL,
  params: {
    part: 'snippet',
  },
  headers: {
    "X-RapidAPI-Key": "2c1af9755dmsh996c7f9f693aba9p1b5382jsn9110d56293ef",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function APIFetch (url) {
  const response = await axios.get(`${Base_URL}/${url}`, options);
  return response;
}

export default APIFetch;
