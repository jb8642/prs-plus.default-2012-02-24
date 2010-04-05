// Name: Non-Unicode text encoding
// Description: Allows to choose between Latin / win1251 (Russian) encodings
// Author: kartu
//
// History:
//	2010-03-04 kartu - Initial version
//	2010-03-14 kartu - #Refactored Utils -> Core
//	2010-03-14 kartu - Localized

var str = Core.lang.getStrings("TextEncoding")

// Localize
var L = function (key) {
	if (str.hasOwnProperty(key)) {
		return str[key];
	} else {
		return "TextEncoding." + key;
	}
};

return {
	name: "TextEncoding",
	title: L("TITLE"),
	description: L("DESCRIPTION"),
	comment: L("COMMENT"),
	icon: "BOOK",
	optionDefs: [
		{
			name: "encoding",
			title: L("OPTION_TITLE"),
			icon: "BOOK",
			defaultValue: "___latin___",
			values:	["___latin___", "___win1251___"],
			valueTitles: {
				___latin___: L("LATIN"), 
				___win1251___: L("RUSSIAN") 
			}
		}
	]
};
