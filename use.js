/* 
    Use: All methods passed to .use method, will be
         used like a Middleware and will receive 
         request, response and next information. Details: file listen.js
*/

function Use(fn){
    if(!fn) return this;

    /***************** Dependencies *****************/
    const _ = this.util._;
    /************************************************/

    this.use = this.use || {};
    this.use.modules = this.use.modules || [];

    if(!Array.isArray(fn)) fn = [fn];
    
    for (let i = 0, lgt = fn.length; i < lgt; i++){
        let module = fn[i];
        if(!module) continue;

        if(typeof module === 'object') {
            _.extend(this.use, module);
            continue;
        }

        this.use.modules.push(typeof module === 'string' ? require(module) : module);
    }

    return this;

}

module.exports = Use;