/**
 * Renders the default index view
 * @param  {request}  req The express request object
 * @param  {response} res The express response object
 */
var index = exports.index = function(req, res) {
  res.render('index', { title: 'the Best iPad mini use case yet...' });
};

/**
 * Piano Admin route
 * @param  {request}  req The express request object
 * @param  {response} res The express response object
 */
var piano = exports.piano = function(req, res) {
  res.render('piano', { title: 'Piano IO'});
};