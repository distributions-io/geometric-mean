/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Validate a value is NaN:
	isnan = require( 'validate.io-nan' ),

	// Module to be tested:
	mean = require( './../lib/number.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'number mean', function tests() {

	it( 'should export a function', function test() {
		expect( mean ).to.be.a( 'function' );
	});

	it( 'should compute the distribution mean', function test() {
		assert.strictEqual( mean( 0.2 ), 4 );
		assert.strictEqual( mean( 0.4  ), 1.5 );
		assert.strictEqual( mean( 0.8  ), 0.25 );
		assert.strictEqual( mean( 1  ), 0 );
	});

	it( 'should return for a `p` parameter outside the interval [0,1]', function test() {
		assert.isTrue( isnan( mean( -1 ) ) );
		assert.isTrue( isnan( mean( 2 ) ) );
	});

});
