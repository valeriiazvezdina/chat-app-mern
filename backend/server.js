const app = require('./index');
const { server } = require('./socket/socket');
const { connectDb } = require('./config/db');
const PORT = +process.env.PORT;
const cors = require('cors');
app.use(cors());

server.listen(4000, async () => {
    await connectDb();
    console.log(`Server is running on port ${PORT}`);
});