const endpoint= require('./endpoint-helper.js')

module.exports.endpoint = async (event, context, callback) => endpoint.lambdaHandler(event, context, callback);
