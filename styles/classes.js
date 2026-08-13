export function setupMarquee()
{
	const container = document.getElementById( "marquee-container" );
	const text = document.getElementById( "marquee-text" )
	const textSource = document.getElementById( "marquee-text-source" );

	const viewWidth = window.innerWidth;

	//textSource.style.display = "flex";
	const sentenceWidth = textSource.getBoundingClientRect().width;
	text.style.setProperty( '--sentenceWidthRaw', sentenceWidth );
	textSource.style.display = "none";

	const sentences = Math.ceil( viewWidth / sentenceWidth );

	//console.log( sentenceWidth );
	//console.log( sentences );

	let completeText = textSource.innerHTML;

	for ( let idx = 0; idx < sentences; ++idx )
	{
		completeText += textSource.innerHTML;
	}

	text.innerHTML = completeText;
	text.style.setProperty( '--sentenceWidth', `-${sentenceWidth}px` );
}

export function refreshMarquee()
{
	const text = document.getElementById( "marquee-text" )
	const textSource = document.getElementById( "marquee-text-source" );

	const viewWidth = window.innerWidth;

	const sentenceWidth = text.style.getPropertyValue( '--sentenceWidthRaw' );
	const sentences = Math.ceil( viewWidth / sentenceWidth );

	let completeText = textSource.innerHTML;

	for ( let idx = 0; idx < sentences; ++idx )
	{
		completeText += textSource.innerHTML;
	}

	text.innerHTML = completeText;
}

export function resolvePageName()
{
	const container = document.getElementById( "page-name-container" );
	const item = document.getElementById( "page-name-text" );
	const title = document.title;

	let shortText = "";
	let idx = 0;

	let success = false;

	while ( idx < title.length )
	{
		if ( title[ idx ] == '|' )
		{
			while ( title[ --idx ] == ' ' );

			//if ( idx >= 0 )
			//	shortText[ ++idx ] = '\0';

			success = true;
			break;
		}

		shortText += title[ idx++ ];
	}

	if ( success )
		item.innerHTML = shortText;
	else
		//	container.innerHTML = "Channel Listing Unavailable"
		container.innerHTML = "";
}

export function dynamicYear()
{
	const text = document.getElementById( "curr-year" );
	const currentYear = new Date().getFullYear();

	text.innerHTML = currentYear;
}