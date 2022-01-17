import express from 'express';
import routes from './routes/index';
import { promises as fspromises } from 'fs';

const app = express();
const port = 3000;
app.use('/api', routes);

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
})