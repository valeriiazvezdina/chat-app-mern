const app = require('./index');
const { connectDb } = require('./config/db');
const PORT = +process.env.PORT;

app.listen(PORT, async () => {
    await connectDb();
    console.log('Server is running on port 3000')
});