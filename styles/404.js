import * as Classes from '/styles/classes.js';
import * as Shared from '/styles/shared.js';

document.addEventListener( "DOMContentLoaded", () =>
{
	fetch( '/styles/404.html' )
		.then( response => response.text() )
		.then( data =>
		{
			Shared.Setup( data );
		} )
		.catch( error => console.error( 'A funny happened: ', error ) );
} )