import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import usersRoutes from './Routes/users.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}))

app.use('/users', usersRoutes);


app.get('/', (req,res) =>{
    console.log('[TEST]!');

    res.send('Homepage');

} );

app.listen(PORT, () => console.log(`server running on port http://localhost:${PORT}`));


