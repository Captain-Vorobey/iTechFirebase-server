const functions = require('firebase-functions');
const app = require(`express`)();
const table = require(`./table`);

app.use('/table', table);

 module.exports.app = functions.https.onRequest(app);
