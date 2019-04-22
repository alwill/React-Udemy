import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 7b1a75be55dc8f55b1d76796a871dbeb7c8819f456122d8f3a284be439852bc4'
  }
});
