const userRoutes = (app, fs) => {
  // variables
  const dataPath = './data/meeting.json';

  // helper methods
  const readFile = (
    callback,
    returnJson = false,
    filePath = dataPath,
    encoding = 'utf8'
  ) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        throw err;
      }
      callback(returnJson ? JSON.parse(data) : data);
    });
  };

  const writeFile = (
    fileData,
    callback,
    filePath = dataPath,
    encoding = 'utf8'
  ) => {
    fs.writeFile(filePath, fileData, encoding, (err) => {
      if (err) {
        throw err;
      }
      callback();
    });
  };

  // READ
  app.get('/meetings', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  // CREATE
  app.post('/meeting', (req, res) => {
    readFile((data) => {

      console.log(req.body, "req.body  ==================== ");
      const parsedData = JSON.parse(JSON.stringify(data));
      const newMeetingId = parsedData.results.length + 1;
      // add the new meeting
      parsedData.results.push({ id: newMeetingId, ...req.body });
      // data[newMeetingId.toString()] = req.body;
      console.log(parsedData, "parsed data  ==================== ");
      writeFile(JSON.stringify(parsedData, null, 2), () => {
        res.status(200).send('new meeting added');
      });
    }, true);
  });

  // UPDATE
  app.put('/meeting/:id', (req, res) => {
    readFile((data) => {
      // add the new user
      const meetingId = req.params['id'];
      data[meetingId] = req.body;

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`meeting id:${meetingId} updated`);
      });
    }, true);
  });

  // DELETE
  app.delete('/meeting/:id', (req, res) => {
    readFile((data) => {
      // add the new user
      const meetingId = req.params['id'];
      delete data[meetingId];

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`meeting id:${meetingId} removed`);
      });
    }, true);
  });
};

module.exports = userRoutes;
