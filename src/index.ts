import app from './app';
import appConfig from './config/appConfig';

const port = appConfig.port;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
