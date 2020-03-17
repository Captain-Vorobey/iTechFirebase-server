const table = require(`express`).Router();
const admin = require("firebase-admin");

const serviceAccount = require("./itechart-firebase-adminsdk-viq3k-7bde1adba8.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://itechart.firebaseio.com"
});

const firestore = admin.firestore();

table.get('/:id', async (req, res) => {
    const id = req.params.id;
    let json = {};
    const docRef = firestore.doc(`/tables/${id}`);
    await docRef.get()
    .then(res => json = res.data())
    .catch(e => console.error(e.message));
    res.json(json);
});

module.exports = table;

/*table.get('/:id', async (req, res) => {
    const id = req.params.id;
    let json = "ddd";
    const docRef = firestore.doc(`/tables/${id}`);
    await docRef.get()
    .then((res => json = res.data()));
    res.json(json);
});

module.exports = table;*/