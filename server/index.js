const express = require("express");
const cors = require("cors");
const axios = require('axios');
const serverless = require('serverless-http');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/generateImage', async (req, res) => {
  try {
    const picsumResponse = await axios.get('https://picsum.photos/600/300', {
			 responseType: 'arraybuffer'
		});
		res.set('Content-Type', picsumResponse.headers['content-type']);
    res.send(picsumResponse.data);
  } catch (error) {
    console.error('Error calling Pisum API:', error.message);
    res.status(500).json({ error: 'Failed to fetch from Pisum API' });
  }
});

if (process.env.NODE_ENV !== 'production') {
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app; 
module.exports.handler = serverless(app);
