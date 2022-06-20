const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.options('*', cors())

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));


//Routes
const customerRoutes = require('./routes/customers');
const customerLoginRoutes = require('./routes/customer_login');
const mechanicLoginRoutes = require('./routes/mechanic_login ');
const mechanicRoutes = require('./routes/mechanics');
const placeoderRoutes = require('./routes/placeoders');
const service_typeRoutes = require('./routes/service_types');



const api = process.env.API_URL;

app.use(`${api}/customers`, customerRoutes);
app.use(`${api}/mechanics`, mechanicRoutes);
app.use(`${api}/placeoder`, placeoderRoutes);
app.use(`${api}/service_type`, service_typeRoutes);



app.use(`${api}/customer_login`, customerLoginRoutes);
app.use(`${api}/mechanics_login`, mechanicLoginRoutes);

//Database

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'AutoMechanic'
})
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((err)=> {
    console.log(err);
})

//Server
app.listen(3000, ()=>{

    console.log('server is running http://localhost:3000');
})