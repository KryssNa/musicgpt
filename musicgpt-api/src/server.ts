import app from './app';
import { ENV } from './config/env';

const PORT = ENV.PORT;
const NODE_ENV = ENV.NODE_ENV;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${NODE_ENV} env`);
}); 