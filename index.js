/**
 * Created by songdonghong on 2016/11/11.
 */
'use strict';

/**
 * error middleware
 *
 * @param {Object} [options]
 * @return {GeneratorFunction}
 * @api public
 */
module.exports = function getMiddleware(options) {
    options = options || {};
    var defaults = {
        type: "json"//string
    };
    // Set defaults
    for (var key in defaults) {
        if (!options.hasOwnProperty(key)) {
            options[key] = defaults[key];
        }
    }

    return function* (next) {
        var _this=this;
        try {
            yield next;
        } catch (err) {
            console.log("onerror");
            if(options.type=="json")
            {
                console.log(_this.status);
                var tempCode = err.code || _this.status;
                var tempStatus=_this.status||500;
                _this.body ={"message":err.message,"code":tempCode,"status":tempStatus};// err.message;
            }
            else
            {
                _this.status = err.status || 500;
                _this.body = err.message;
            }
            //  this.app.emit('error', err, this);
        }
    };
};
