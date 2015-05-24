/**
*	Trial Division algorithm for factorization
*
*	@author Lakha Singh
*/

// Read Input from console
var readInput = function( callback ){
	process.stdin.setEncoding('utf8');
	callback = callback || function(){};

	// Start Listening to user input
	process.stdin.addListener('data', function( data ){
		callback( data );
	});
};

// Factorize integer
var factorize = function( num ){
	var limit = num/2;

	var i = 2, k = 1;

	// Calulated factors
	var factors = [];

	// For optimzation, checking against only prime divisors
	for ( ; i <= 3; i++ ){
		while( num % i === 0){
			factors.push( i );
			num /= i;
		}
	}

	while( num !== 1 ){
		for ( j = -1; j <= 1; j +=2 ){
			i = 6*k + j;

			while( num % i === 0){
				factors.push( i );
				num /= i;
			}
		}
		k++;
	}

	return factors;
};

// Start
readInput(function( input ){
	console.log( 'Factors are : ' + factorize( parseInt( input, 10 ) ));
	process.exit();
});