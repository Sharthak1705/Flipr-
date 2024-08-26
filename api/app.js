const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Contact = require('./routes/contact.route');
const Newsletter = require('./routes/subscription.route');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/api/contact', Contact);
app.use('/api/newsletter', Newsletter);


mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
