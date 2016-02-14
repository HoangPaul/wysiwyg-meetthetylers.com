// Contains utility functions and wrapper functions that should
// work with jQuery and cheerio

define(function() {
	// Polyfill for the $.each function from jQuery since cheerio hasn't
	// provided such functionality
	// PORTED FROM JQUERY
	var class2type = {
		"[object Boolean]" : "boolean",
		"[object Number]" : "number",
		"[object String]" : "string",
		"[object Function]" : "function",
		"[object Array]" : "array",
		"[object DateRegExp]" : "dateregexp",
		"[object Object]" : "object",
		"[object Error]" : "error",
		"[object Symbol]" : "symbol"
	};

	var _isWindow = function( obj ) {
		return obj != null && obj === obj.window;
	};

	var _type = function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android<4.0 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	};

	var isArrayLike = function ( obj ) {
		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = _type( obj );
	
		if ( type === "function" || _isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}

	// If $.each() doesn't exist, we'll use the ported version.
	var _each = function($, obj, callback) {
		if (typeof $.each !== 'undefined') {
			return $.each(obj, callback);
		}

		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	};
	// END JQUERY PORT

    return {
        recursiveWalk : function($, nodes, handler) {
            var shouldContinue = true;
            var _findNode = function(_, currentNode) {
                if (!shouldContinue || typeof currentNode !== 'object') {
                    return;
                }

                shouldContinue = handler(currentNode);

                if (shouldContinue) {
                    _each($, currentNode, _findNode);
                    return true;
                } else {
                    return false;
                }
            };

            _findNode(null, nodes);
        },
		each : function($, obj, callback) {
			return _each($, obj, callback);
		}
    }
});
