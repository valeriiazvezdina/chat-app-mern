const app = require('./index');
const { connectDb } = require('./config/db');
const PORT = +process.env.PORT;
const cors = require('cors');
app.use(cors());

app.listen(PORT, async () => {
    await connectDb();
    console.log(`Server is running on port ${PORT}`);
});