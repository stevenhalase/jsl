import * as express from 'express';
import * as path from 'path';

const app: express.Application = express();

app.use(express.static(__dirname + '/www'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/www/index.html'));
});

app.listen(process.env.PORT || 8080);