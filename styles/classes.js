export function setupMarquee()
{
	const container = document.getElementById( "marquee-container" );
	const text = document.getElementById( "marquee-text" )

	const viewWidth = window.innerWidth;
	const sentenceWidth = text.getBoundingClientRect().width;

	const sentences = Math.ceil( viewWidth / sentenceWidth );

	let completeText = text.innerHTML;

	for ( let idx = 0; idx < sentences; ++idx )
	{
		completeText += text.innerHTML;
	}

	text.innerHTML = completeText;
	text.style.setProperty( '--sentenceWidth', `-${sentenceWidth}px` );
}