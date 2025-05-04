const path = require('path');

// Export the directory name of the main module (entry file, usually app.js)
// 'require.main.filename' gives the absolute path of the entry point of the application
// 'path.dirname(...)' extracts just the directory path from it
module.exports = path.dirname(require.main.filename);
