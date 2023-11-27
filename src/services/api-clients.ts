// import 'dotenv/config';
import axios from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '94c70a9433e34de0a1ab75841c5b563f',
  },
});
