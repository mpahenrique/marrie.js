function index () {

	/***************** Dependencies *****************/
	const  path    = require('path')
	,      methods = require(path.join(__dirname, 'package')).application.methods;
    /************************************************/
	
	class Marrie {}

	for (let i = 0, lgt = methods.length; i < lgt; i++) {
		let method = methods[i];
		Marrie.prototype[method] = require(path.join(__dirname, method));		
    }

    /* !!!!! ********************* tests */
    
    var a = new Marrie();
        a
        .use(['./tests/logs', function(req, res){ // Array with methods to use
            req.newMethod();
            req.otherProp = 'some-property';
        }])
        .use(function(req){ // Function, string, module, object as a method to use
            console.info("Some property?", req.otherProp);
        })
        .route('/index.html', (req, res)=>{
            console.info("Controller of", req.url);
        })
        .listen(3000);
    
    /* !!!!! end tests ****************** */

	return new Marrie;

}	

module.exports = index;