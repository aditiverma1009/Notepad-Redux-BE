const Models = require('../../models');

const handler1 = (request, response) => {
  console.log(request.payload);
  const notes = request.payload;
  const newnotes = notes.map(ele => ({
    noteid: ele.noteid,
    notetitle: ele.notetitle,
    notecontent: ele.notecontent,
  }));
  console.log(newnotes);
  Models.notes.destroy({ truncate: true });
  Models.notes.bulkCreate(newnotes)
    .then(() => response('Notes Synced to DB'))
    .catch(() => response('Internal Server Error'));
};
//   .then(data => console.log(data));
//   Model.noteslist.bulkCreate(arrayOfObjects);


module.exports = [{
  path: '/setData',
  method: 'POST',
  handler: handler1,
}];
