window.addEventListener('load', function (event) {
	setInterval(() => {applyDownloadLinks()}, 4000);
});


function applyDownloadLinks() {
	var thingCards = getThingCards();
	
	thingCards.forEach((x) => {
		let url = extractUrlFromThingCard(x);
		x.innerHTML += '<a href="' + url + '/zip">Download</a>';
		x.className += " tvedl";
	});
}

function extractUrlFromThingCard(thingCard){
	let link = thingCard.querySelector("a[class*='ThingCardBody__cardBodyWrapper']");
	let url = link.href;
	return url;
}

 function getThingCards() {
	return document.querySelectorAll("div[class*='ThingCard__']:not(.tvedl)");
 }