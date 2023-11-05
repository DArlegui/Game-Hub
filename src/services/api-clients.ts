// import 'dotenv/config';
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'YOU_API_KEY_HERE',
  },
});
