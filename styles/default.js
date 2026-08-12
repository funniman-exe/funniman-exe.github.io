import * as Classes from '/styles/classes.js';

document.addEventListener( "DOMContentLoaded", () => {
	fetch( '/styles/default.html' )
		.then( response => response.text() )
		.then( data => {
			const parser = new DOMParser();
			const doc = parser.parseFromString( data, 'text/html' );

			const header = doc.querySelector( 'header' ).outerHTML;
			const footer = doc.querySelector( 'footer' ).outerHTML;

			document.getElementById( 'header-placeholder' ).innerHTML = header;
			document.getElementById( 'footer-placeholder' ).innerHTML = footer;

			Classes.setupMarquee();
		} )
	.catch( error => console.error( 'A funny happened: ', error ) );	
} )