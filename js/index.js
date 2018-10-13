/**
* ARBEIDSKRAV 01
* -- av Ole Algoritme (C) 2018
* 
* OBS! All kommentering og variabelnavngiving er (selvfølgelig) gjort på engelsk.
* 
* Hele oppgaven kan skrives som en oneliner, om nødvendig. Har i stedet valgt
* å være mer grundig.
*
* Oneliner: var z = ["231", "0186", "35012", "7011", "01304"]; for(var i = 0; i < z.length; i++) if(z[i].length == 4) console.log(z[i]+" is correct"); else console.log(z[i]+" is incorrect");
*
*/


/**
*
* Provided array of string based numbers/ints
* (content not modified)
*/
var zipcodes = ["231", "0186", "35012", "7011", "01304"];


/** 
*
* function that checks if zipcode parameter is a number and for length equal to 4 (presuming norwegian zip code length of 4) 
*
* @param  String   zipcode      Zip code that will be checked 
* @return Boolean  true/false   Returns true if the parameter length is 4 and zipcode parameter is a number
*/
function isQualifiedZipcode(zipcode) {
	if(zipcode.length == 4 && Number(zipcode)) return true;
	return false;
}


/** 
*
* function that concats the final string based on the result of the zipcode check,
* and returns the final string
*
* @param  Boolean   isQualified  Boolean representing zipcode qualification
* @param  String    zipcode      Zip code that will be used 
* @return String    logString    Final string for logging purpose
*/
function logString(isQualified, zipcode) {
	var logString = "Følgende nummer kvalifiserer som postnummer: " + zipCode;
	if (!isQualified) logString = logString.substring(0, 28) + " ikke" + logString.substring(28);
	return logString;
}


/**
*
* - CSS colored console logging
* - Looping through array
* - Showing results in console per array iteration 
*/
console.log("%c" + "RESULTATER FRA ARBEIDSKRAV 01", "background: #255; color: #FFFFFF");
console.log("%c" + "-- kodet av Ole Algoritme (C) 2018", "background: #255; color: #FFFFFF");
console.log("%c" + "_________________________________________________________________________________" + "\n", "color: #000000;");


for(var i = 0; i < zipcodes.length; i++) {
	var zipCode = zipcodes[i];
	var isQualified = isQualifiedZipcode(zipCode);
	var resultString = logString(isQualified, zipCode);
	console.log("%c" + "|     " + resultString, "background: #221; color: #FFFFFF");
}
