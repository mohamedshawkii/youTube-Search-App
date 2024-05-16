import axios from "axios";
const Base_URL = "https://youtube-v31.p.rapidapi.com";
// b0f5c80d3bmsh1df0cea8b4cf459p1433bejsn845bb222d7f4
const options = {
  method: "GET",
  url: Base_URL,
  params: {
    part: 'snippet',
  },
  headers: {
    "X-RapidAPI-Key": "b0f5c80d3bmsh1df0cea8b4cf459p1433bejsn845bb222d7f4",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function APIFetch (url) {
  const response = await axios.get(`${Base_URL}/${url}`, options);
  return response;
}

export default APIFetch;
