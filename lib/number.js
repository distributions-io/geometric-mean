'use strict';

// MODULES //

var isNumber = require( 'validate.io-number-primitive' );


// MEAN //

/**
* FUNCTION mean( p )
*	Computes the distribution mean for a Geometric with parameter p.
*
* @param {Number} p - success probability
* @returns {Number} distribution mean
*/
function mean( p ) {
	if ( !( isNumber(p) && 0 <= p && p <= 1) ) {
		return NaN;
	}
	return 1 / p;
} // end FUNCTION mean()


// EXPORTS

module.exports =  mean;
