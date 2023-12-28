import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '004082a1c80c450ca71a0765c011de2a'
  }
});
