/**
 * obfuscate console.log function
 * 
 * all arguments get passed to console.log
 * 
 * @method OCL
 * @return undefined
 **/
function OCL(){
   
    return eval( 'window.console && console.log && console.log.apply( console, arguments )' );
}

/*
 * real basic test until I figure how to proxy the console output
 * 
 * OCL( 'string' ) == console.log( 'string' )
 * OCL( 123 ) == consol.log( 123 )
 * OCL( {one: 1, two: '2' } ) == console.log( {one: 1, two: 2} )
 * OCL( [1,2,'3'] ) == console.log( [1,2,'3'] )
 * 
 * /