require('dotenv').config()
import {app} from '../application';

const { SERVER_PORT } = process.env ;

function startServer() {
  return app.listen(SERVER_PORT, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('Listening at http://localhost:' + SERVER_PORT);
  });
};


module.exports = startServer();