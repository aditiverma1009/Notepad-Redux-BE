const handlerfn = (request, response) => {
  response('getget');
};

module.exports = [{
  path: '/setData',
  method: 'GET',
  handler: handlerfn,
}];

