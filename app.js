//create a new express app with axios calling a endpoint

const express = require('express');
const axios = require('axios');
const cron = require('node-cron');
const app = express();

app.get('/', async (req, res) => {
    res.send('Hello World');
}
);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);



// using node-cron and git the endpoint every 30 seconds, write the code below

cron.schedule('*/59 * * * * *', async () => {
    await axios.get('https://slack-status-scheduler-app.onrender.com/health');
});

cron.schedule('*/30 * * * *', async () => {
    const response = await axios.get('https://slack-status-scheduler-app.onrender.com/health');
    console.log(response.data);
});

