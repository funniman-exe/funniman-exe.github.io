import * as Classes from '/styles/classes.js';

let resizeDebounce;
window.addEventListener( 'resize', ( event ) =>
{
	clearTimeout( resizeDebounce );

	resizeDebounce = setTimeout( () =>
	{
		Classes.refreshMarquee();
	}, 75 );
} );

export function Setup( data )
{
	try
	{
		const parser = new DOMParser();
		const doc = parser.parseFromString( data, 'text/html' );

		const header = doc.querySelector( 'header' ).outerHTML;
		const footer = doc.querySelector( 'footer' ).outerHTML;

		document.getElementById( 'header-placeholder' ).innerHTML = header;
		document.getElementById( 'footer-placeholder' ).innerHTML = footer;

		Classes.setupMarquee();
		Classes.resolvePageName();
		Classes.dynamicYear();
	}
	catch ( error )
	{
		console.error( 'A funny happened: ', error.message );
	}
}