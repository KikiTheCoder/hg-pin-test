const express = require('express')
const app = express()
const port = 3000
const { Gpio } = require("onoff")
const childprocces = require("child_process")


app.get('/', (req, res) => {
  res.send('Hello World!')
})


const switchIn = new Gpio( '20', 'in', 'both' );

switchIn.watch( ( err, value ) => {
  if( err ) {
    console.log( 'Error', err );
  }

  // log pin value (0 or 1)
  console.log( 'Pin value', value );

if(value === "1"){
  consloe.log("kekee)
  }
} );

const switchIn1 = new Gpio( '1', 'in', 'both' );

switchIn1.watch( ( err, value ) => {
  if( err ) {
    console.log( 'Error', err );
  }

  // log pin value (0 or 1)
  console.log( 'Pin value', value ,"pin 1" );
  
  
  

} );

const switchIn2 = new Gpio( '7', 'in', 'both' );

switchIn2.watch( ( err, value ) => {
  if( err ) {
    console.log( 'Error', err );
  }

  // log pin value (0 or 1)
  console.log( 'Pin value', value ,"pin 7" );

} );


const switchIn3 = new Gpio( '8', 'in', 'both' );

switchIn3.watch( ( err, value ) => {
  if( err ) {
    console.log( 'Error', err );
  }

  // log pin value (0 or 1)
  console.log( 'Pin value', value ,"pin 8" );

} );


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
