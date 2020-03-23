window.addEventListener('load', function (event) {
	setInterval(() => {applyDownloadLinks()}, 4000);
});


function applyDownloadLinks() {
	console.log("applying links...");
	var thingCards = getThingCards();
	console.log("thing cards", thingCards);
	
	thingCards.forEach((x) => {
		let url = extractUrlFromThingCard(x);
		x.innerHTML += '<a href="' + url + '/zip">Download</a>';
		x.className += " tvedl";
	});
}

function extractUrlFromThingCard(thingCard){
	let link = thingCard.querySelector("a[class*='ThingCardBody__cardBodyWrapper']");
	console.log("link:", link);
	let url = link.href;
	console.log("url: " + url );
	return url;
}

 function getThingCards() {
	return document.querySelectorAll("div[class*='ThingCard__']:not(.tvedl)");
 }