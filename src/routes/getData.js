const Models = require('../../models');

const handlerfn = (request, response) => {
  console.log('GET /sync');
  Models.notes.findAll().then((notes) => {
    // console.log(notes);
    response(notes);
  });
};

module.exports = [{
  path: '/getData',
  method: 'GET',
  handler: handlerfn,
}];

