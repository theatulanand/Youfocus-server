const morgan = require('morgan');

// Create a logger middleware function
const logger = morgan(`tiny`);

// Export the middleware function
module.exports = logger;