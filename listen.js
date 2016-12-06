/*
    Listen: create the server and configure the methods passed in .use method
*/

function Listen(port){

    /***************** Dependencies *****************/
    const http        = require('http')
    ,     _           = this.util._; 
    /************************************************/

    _.extend(http.IncomingMessage.prototype, this.use); // It extends current req.prototype
                                                        // and use .use methods that was configured
    
    http.createServer((req, res)=>{

        //  Modules that change or listen request (EX. LOGS) (Always will be called)
        for(let i = 0, lgt = req.modules.length; i < lgt; i++){
            req.modules[i](req, res);
        }

        const ctrl = this.routes[req.url.replace(/\?.+/g, '')]; // Get controller of this route
        ctrl && ctrl(req, res); // If the route has a valid controller, it will be called

        // tests to prevent no-response
        res.end('Res.end: Marrie');
        // end tests

    }).listen(port || 3000);

}

module.exports = Listen;