const getData = require('./getData');
const setData = require('./setData');

const handlerFn = (request, response) => {
  response('on root page');
};


module.exports = [{
  path: '/',
  method: 'GET',
  handler: handlerFn,
}].concat(getData).concat(setData);
