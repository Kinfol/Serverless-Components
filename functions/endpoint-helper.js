const lambdaHandler = async function lambdaHandler(event, context, callback) {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, the current time is ${new Date().toTimeString()}.`,
    }),
  };

  callback(null, response);
}


module.exports = {
    lambdaHandler,
};