console.log($)

var apiKey = "9b64b430697949dc9e77f1cdb7e6554e"

var baseUrl = "https://congress.api.sunlightfoundation.com/legislators?apikey="

var fullUrl = baseUrl + apiKey

var promise = $.getJSON(fullUrl)

var legislatorToHTML = function(legis) {
	var newString = "<div>  \
				<h1 class ='name'>" + legis.first_name + " " + legis.last_name +"</h1> \
				<h2 class ='title'>" + legis.title + " --" + legis.party + "-" + legis.state_name +
				"</h2> \
				<ul><li class ='email'>" + "Email: " + legis.oc_email + "</li> \
				<li class ='site'>" + "Website: " + legis.website + "</li> \
				<li class ='phone'>" + "Phone: " + legis.phone + "</li> \
				<li class ='bday'>" + "Date of Birth: " + legis.birthday + "</li> \
			</ul> \
			<p class='end'> Term End: " + legis.term_end + "</p></div>"
	return newString
}

var handleData = function(jsonData) {
	var legislators = jsonData.results
	var htmlString = ""

	console.log(legislators)

	for (var i = 0; i < legislators.length; i++) {
		var thisGuy = legislators[i]
		console.log(thisGuy.first_name)
		htmlString += legislatorToHTML(thisGuy)
		// console.log(thisGuy["first_name"])
	}
	console.log(htmlString)
		var personBox = document.querySelector(".personBox")
		personBox.innerHTML = htmlString
}

promise.then(handleData)
