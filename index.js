const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const warehouseRoutes = require('./routes/warehouseRoutes');
const companyRoutes = require('./routes/companyRoutes');
const bankRoutes = require('./routes/bankRoutes');
const bankAccountRoutes = require('./routes/bankAccountRoutes');

const mongoose = require('mongoose');
const patientRoutes = require('./routes/patientRoutes');
const billingRoutes = require('./routes/billingRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const financeRoutes = require('./routes/financeRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

dotenv.config();


const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/hospitalDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


app.use('/api/users', userRoutes);
app.use('/api/warehouses', warehouseRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/banks', bankRoutes);
app.use('/api/bankAccounts', bankAccountRoutes);

app.use('/api/patients', patientRoutes);
app.use('/api/bills', billingRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/finances', financeRoutes);
app.use('/api/appointments', appointmentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
