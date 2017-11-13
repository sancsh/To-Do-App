var configInfo = require('./config');

module.exports = { 
    getDBConnectionString: function(){
        return 'mongodb:' + configInfo.uname +':'+configInfo.pwd+'@ds259245.mlab.com:59245/todoapp-sancsh';
    }
}