window.addEventListener('load', function (event) {
	setInterval(() => {applyDownloadLinks()}, 2000);
});


function applyDownloadLinks() {
	var thingCards = getThingCards();
	
	thingCards.forEach((x) => {
		let thingUrl = extractUrlFromThingCard(x);
		let downloadUrl = thingUrl + "/zip";
		
		let newLink = document.createElement("a");
		newLink.setAttribute("href", downloadUrl);
		newLink.className = "button button-primary";
		newLink.style.padding = "8px";
		newLink.style.width = "auto";
		newLink.style.color = "#ffffff";
		newLink.style.margin = "5px";
		
		let newText = document.createTextNode("Download");
		
		newLink.appendChild(newText);

		x.appendChild(newLink);
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