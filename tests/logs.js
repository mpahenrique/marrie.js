// teste :)
function log(req, resp, next){
    console.info('----->', req.method + ':', req.url);
    req.newMethod = function(){ console.info('New method'); }
}

module.exports = log;