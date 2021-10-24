const express = require('express')
const app = express()
const port = 3000
//const { Gpio } = require("onoff")
const childprocces = require("child_process")
const mongoose = require("mongoose")
const Activation = require("./ActivationScheme")
const dev = (process.env.NODE_ENV == "production") ? false : true
mongoose.connect("mongodb+srv://halloweenuser:XnaDFjqObtJGdRf6@halloweengarten.iu0kr.mongodb.net/halloween-data?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true }).then(
  console.log("[DB] Ready")
)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/triggerdb', (req, res) => {
  newDatabaseEntry(0, 0)

  res.send("Jop")
})

const newDatabaseEntry = (event, program) => {
  Activation.countDocuments({}, (err, c) => {

    new Activation({
      id: c + 1,
      time: new Date(),
      event,
      program,
      dev: dev
    }).save();
  })
}

const switchIn = new Gpio('20', 'in', 'both');

switchIn.watch((err, value) => {
  if (err) {
    console.log('Error', err);
  }

  // log pin value (0 or 1)
  console.log('Pin value', value);

  if (value === 1) {
    newDatabaseEntry(0, 0);

    childprocces.spawn("python3", ["musik.py"])
  }
});

const switchIn1 = new Gpio('1', 'in', 'both');

switchIn1.watch((err, value) => {
  if (err) {
    console.log('Error', err);
  }

  // log pin value (0 or 1)
  console.log('Pin value', value, "pin 1");




});

const switchIn2 = new Gpio('7', 'in', 'both');

switchIn2.watch((err, value) => {
  if (err) {
    console.log('Error', err);
  }

  // log pin value (0 or 1)
  console.log('Pin value', value, "pin 7");

});


const switchIn3 = new Gpio('8', 'in', 'both');

switchIn3.watch((err, value) => {
  if (err) {
    console.log('Error', err);
  }

  // log pin value (0 or 1)
  console.log('Pin value', value, "pin 8");

});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
