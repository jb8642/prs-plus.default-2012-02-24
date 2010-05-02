// Language: Georgian
// Description: Localization file
// Translator: kartu
//
// History:
//	2010-04-24 kartu - Added TITLE for "clock" addon
//	2010-04-24 kartu - Fixed spelling of CONTINUE
//	2010-04-24 kartu - Fixed spelling
//	2010-04-25 kartu - Translated more stuff
//	2010-04-28 kartu - Finalized Georgian translation
//	2010-04-30 kravitz - Refactored, added new strings
//	2010-05-01 kartu - Translated new strings, fixed minor glitches
//				Added ACTION_GOTO_LINK

var FUNC_X_SOMETHING = function (n, s) {
	if (n > 0) {
		return n + " " + s[0];
	}
	return s[1];
};
var FUNC_X_BOOKS = function (n) {
	return FUNC_X_SOMETHING(n, ["წიგნი", "ცარიელი"]);
};
var FUNC_X_SETTINGS = function (n) {
	return FUNC_X_SOMETHING(n, ["ოფცია", "ცარიელი"]);
};
var FUNC_X_ITEMS = function (n) {
	return FUNC_X_SOMETHING(n, ["საგანი", "ცარიელი"]);
};
var FUNC_X_PAGES = function (n) {
	return FUNC_X_SOMETHING(n, ["გვერდი", "ცარიელი"]);
};
var FUNC_X_PICTURES = function (n) {
	return FUNC_X_SOMETHING(n, ["სურათი", "ცარიელი"]);
};
var FUNC_X_SONGS = function (n) {
	return FUNC_X_SOMETHING(n, ["სიმღერა", "ცარიელი"]);
};
var FUNC_X_BOOKMARKS = function (n) {
	return FUNC_X_SOMETHING(n, ["ჩანიშნული", "ცარიელი"]);
};
var FUNC_X_COLLECTIONS = function (n) {
	return FUNC_X_SOMETHING(n, ["კოლქკცია", "ცარიელი"]);
};

// Utility function, no need to localize
var toDoubleDigit = function (num) {
	if (num < 10) {
		return "0" + num;
	}
	return num;
};

var FUNC_GET_DATE = function (date) {
	var day, month, year;
	day = toDoubleDigit(date.getDate());
	month = toDoubleDigit(date.getMonth() + 1);
	year = date.getFullYear();
	return month + "/" + day + "/" + year;
};

var FUNC_GET_TIME = function (date) {
	var hour, minute;
	hour = toDoubleDigit(date.getHours());
	minute = toDoubleDigit(date.getMinutes());
	return hour + ":" + minute;
};

var FUNC_GET_DATE_TIME = function (date) {
	return date.toLocaleDateString() + " " + FUNC_GET_TIME(date);
};


return {
	// Standard stuff
	Sony: {
		// USB connected
		DO_NOT_DISCONNECT: "არ გამორთოთ",
		USB_CONNECTED: "USB შეერთებულია",
		DEVICE_LOCKED: "წიგნი დაბლოკილია",

		// About, translate either all or none
		ABOUT_PRSP: "PRS+ Script: @@@script@@@\n" + "PRS+ Firmware: @@@firmware@@@\n" + "ავტორი: მიხეილ სუხიაშვილი aka kartu (kartu3@gmail.com) using work of: " + "igorsk, boroda, obelix, pepak, llasram და სხვები.\n" + "© GNU Lesser General Public License.",
		ABOUT_1: "საავტორო უფლებები ©2006-2008 Sony Corporation",
		ABOUT_2: "Adobe, the Adobe logo, Reader and PDF are either registered trademarks or" + " trademarks of Adobe Systems Incorporated in the United States and/or other countries.",
		ABOUT_3: "MPEG Layer-3 audio coding technology and patents licensed by Fraunhofer IIS and Thomson." + " MPEG-4 AAC audio coding technology licensed by Fraunhofer IIS (www.iis.fraunhofer.de/amm/).",
		ABOUT_4: "Application software designed and implemented by Kinoma (www.kinoma.com). Portions Copyright ©2006,2007 Kinoma, Inc.",
		ABOUT_5: "Bitstream is a registered trademark, and Dutch, Font Fusion, and Swiss are trademarks, of Bitstream, Inc.",
		ABOUT_6: "Portions of this software are Copyright ©2005 The FreeType Project (www.freetype.org). All rights reserved.",
		ABOUT_7: "This software is based in part on the work of the Independent JPEG Group.",
		AUTHORIZED_SONY: "წიგნი ავტორიზებულია eBook Store-ისთვის.",
		NOT_AUTHORIZED_SONY: "წიგნი არ არის ავტორიზებული eBook Store-ისთვის.",
		AUTHORIZED_ADOBE: "წიგნი ავტორიზირებულია Adobe DRM დაცული მასალისთვის.",
		NOT_AUTHORIZED_ADOBE: "წიგნი არ არის ავტორიზირებული Adobe DRM დაცული მასალისთვის.",
		SONY_FW_VERSION: "ვერსია",
		DEVICE_ID: "მოწყობილობა",

		// Mime & card names
		RICH_TEXT_FORMAT: "Rich Text ფორმატი",
		ADOBE_PDF: "Adobe PDF",
		EPUB_DOCUMENT: "EPUB დოკუმენტი",
		BBEB_BOOK: "BBeB წიგნი",
		PLAIN_TEXT: "უბრალო ტექსტი",
		INTERNAL_MEMORY: "შიდა მეხსიერება",
		MEMORY_STICK: "Memory Stick",
		SD_CARD: "SD კარტა",

		// Main.xml & kbook.so stuff
		INVALID_FORMAT: "არასწორი ფორმატი!",
		FORMATTING: "დაფორმატება...",
		LOADING: "იტვირთება...",
		LOW_BATTERY: "აკუმულატორი დამჯდარია!",
		HR_WARNING: "გინდათ წაშალოდ მთელი მასალა, აღადგინოთ საწყისი პარამეტრები და წაშალოთ DRM ავტორიზაცია?\n\nდიახ - დააჭირეთ 5-ს\nარა - დააჭირეთ MENU-ს",
		DEVICE_SHUTDOWN: "სისტემის გათიშვა",
		PRESS_MARK_TO_SHUTDOWN: "დააჭირეთ MARK-ს წიგნის",
		THIS_DEVICE: "გასათიშად.",
		PRESS_MARK_TO_DELETE: "დააჭირეთ MARK-ს წიგნის",
		THIS_BOOK: "წასაშლელად.",
		FORMAT_INTERNAL_MEMORY: "შიდა მეხსიერების დაფორმატება",
		PRESS_MARK_TO_FORMAT: "დააჭირეთ MARK-ს შიდა",
		MSG_INTERNAL_MEMORY: "მეხსიერების დასაფორმატებლად.",
		RESTORE_DEFAULTS: "ნაგულისხმევის აღდგენა",
		PRESS_MARK_TO_RESTORE: "დააჭირეთ MARK-ს",
		DEFAULT_SETTINGS: "ნაგულისხმევის აღსადგენად.",
		UPPER_PAGE: "გვერდი",
		ONE_OF_ONE: "1 - 1",
		NO_BATTERY: "აკუმულატორი დამჯდარია!",
		FORMATTING_INTERNAL_MEMORY: "შიდა მეხსიერების ფორმატირება...",
		SHUTTING_DOWN: "	მუშაობის დასრულება...",

		// Root menu
		CONTINUE: "კითხვის გაგრძელება",
		BOOKS_BY_TITLE: "წიგნები სათაურის მიხედვით",
		BOOKS_BY_AUTHOR: "წიგნები ავტორის მიხედვით",
		BOOKS_BY_DATE: "წიგნები თარიღის მიხედვით",
		COLLECTIONS: "კოლექციები",
		ALL_BOOKMARKS: "ყველა სანიშნე",
		NOW_PLAYING: "ახლა იკვრება",
		MUSIC: "მუსიკა",
		PICTURES: "სურათები",
		SETTINGS: "პარამეტრები",

		// In Settings
		// orientation
		ORIENTATION: "ორიენტაცია",
		HORIZONTAL: "ჰორიზონტალური",
		VERTICAL: "ვერტიკალური",
		// set date
		SET_DATE: "თარიღი",
		YEAR: "წელი",
		MONTH: "თვე",
		DATE: "დღე", // Day
		HOUR: "საათი",
		MINUTE: "წუთი",
		// slideshow
		SLIDESHOW: "დიაფილმი",
		SS_ON: "ჩარ",
		SS_OFF: "გამ",
		SS_TURN: "აქტივირება",
		SS_DURATION: "ხანძლიობა",
		SECONDS: "წამი",
		// auto standby (aka sleep mode)
		AUTOSTANDBY: "ძილის რეჟიმი",
		AS_ON: "ჩარ",
		AS_OFF: "გამ",
		AS_TURN: "აქტივირება",
		// about
		ABOUT: "წიგნის შესახებ",
		// reset to factory settings
		RESET_TO_FACTORY: "საწყისი პარამეტრების აღდგენა",

		// In Advanced Settings
		ADVANCED_SETTINGS: "გაფართოებული პარამეტრები",
		// screen lock (aka device lock)
		SCREEN_LOCK: "წიგნის ჩაკეტვა",
		SL_OFF: "გამ",
		SL_ON: "ჩარ",
		SL_CODE: "კოდი",
		SL_TURN: "აქტივირება",
		// format device
		FORMAT_DEVICE: "წიგნის ფორმატირება",

		// In Book menu
		BEGIN: "დასაწყისი",
		END: "დასასრული",
		BOOKMARKS: "სანიშნეები",
		CONTENTS: "სარჩევი",
		HISTORY: "ისტორია",
		INFO: "ინფორმაცია",
		UTILITIES: "უტილიტები",

		// In Book Utilities
		REMOVE_ALL_BOOKMARKS: "ყველა სანიშნეს წაშლა",
		CLEAR_HISTORY: "ისტორიის წაშლა",
		DELETE_BOOK: "წიგნის წაშლა",

		// In Books by Date
		TODAY: "დღეს",
		EARLIER_THIS_WEEK: "ამ კვირას",
		LAST_WEEK: "წინა კვირას",
		EARLIER_THIS_MONTH: "ამ თვეში",
		LAST_MONTH: "წინა თვეში",
		EARLIER_THIS_QUARTER: "ამ კვარტალში",
		LAST_QUARTER: "წინა კვარტალში",
		EARLIER_THIS_YEAR: "წელს",
		LAST_YEAR: "შარშან",
		OLDER: "უფრო ძველი",

		PAGE: "გვერდი",
		PART: "ნაწილი",
		OF: "/",
		NO_BOOK: "ცარიელი",
		NO_SONG: "ცარიელი",

		// Info title strings, comma separated, no spaces after comma
		INFO_TITLES: "გარეკანი,სათაური,ავტორი,გამომცემელი,კატეგორია,eBook ID,ტიპი,თარიღი,სიდიდე,წყარო,ფაილი,Digital Rights,ვადის ამოწურვა",

		// Titles and criterions for "Books by Title" and "Books by Folder"
		// title is displayed, "criterion" is used for sorting.
		//
		// NOTE: if localization doesn't need custom Books by sorting, just remove CUSTOM_SORT, TITLE_*, CRITERION_* items
		CUSTOM_SORT: true,
		TITLE_1: "0-9",
		CRITERION_1: "0123456789",
		TITLE_2: "A B C D E F",
		CRITERION_2: "ABCabcDEFdef",
		TITLE_3: "G H I J K L",
		CRITERION_3: "GHIghiJKLjkl",
		TITLE_4: "M N O P Q R S",
		CRITERION_4: "MNOmnoPQRSpqrs",
		TITLE_5: "T U V W X Y Z",
		CRITERION_5: "TUVWtuvwWXYZwxyz",
		TITLE_6: "ა ბ გ დ ე ვ ზ თ ი",
		CRITERION_6: "აბგდევზთი",
		TITLE_7: "კ ლ მ ნ ო პ ჟ რ",
		CRITERION_7: "კლმნოპჟრ",
		TITLE_8: "ს ტ უ ფ ქ ღ ყ შ",
		CRITERION_8: "სტუფქღყშ",
		TITLE_9: "ჩ ც ძ წ ჭ ხ ჯ ჰ",
		CRITERION_9: "ჩცძწჭხჯჰ",
		TITLE_0: "სხვა",
		CRITERION_0: "",

		FUNC_GET_DATE_TIME: FUNC_GET_DATE_TIME,
		FUNC_GET_DATE: FUNC_GET_DATE,
		FUNC_GET_TIME: FUNC_GET_TIME,

		FUNC_X_PAGES: FUNC_X_PAGES,
		FUNC_X_ITEMS: FUNC_X_ITEMS,
		FUNC_X_SETTINGS: FUNC_X_SETTINGS,
		FUNC_X_PICTURES: FUNC_X_PICTURES,
		FUNC_X_SONGS: FUNC_X_SONGS,
		FUNC_X_BOOKMARKS: FUNC_X_BOOKMARKS,
		FUNC_X_COLLECTIONS: FUNC_X_COLLECTIONS,
		FUNC_X_BOOKS: FUNC_X_BOOKS
	},

	// PRS+ stuff
	Core: {
		FUNC_X_BOOKS: FUNC_X_BOOKS,
		FUNC_X_SETTINGS: FUNC_X_SETTINGS,
		NODE_PRSP_SETTINGS:  "PRS+ პარამეტრები",
		GROUP_MENU_TITLE: "მენიუს პარამეტრები",
		GROUP_VIEWER_TITLE: "წიგნის მნახველის პარამეტრები"
	},

	CoreLang: {
		TITLE: "ლოკალიზაცია",
		COMMENT: "საჭიროებს გადატვირთვას",
		OPTION_LANG: "ენა",

		OPTION_DATE_FORMAT: "თარიღის ფორმატი",
		ddMMMYY: "31/იან/99",
		ddMONTHYY: "31/იანვარი/99",
		ddMMMYYYY: "31/იან/1999",
		ddMONTHYYYY: "31/იანვარი/1999",

		OPTION_DATE_SEPARATOR: "თარიღის სიმბოლო",
		VALUE_SPACE: "space",
		VALUE_NONE: "არაფერი",

		MONTH_SHORT_1: "იან",
		MONTH_SHORT_2: "თებ",
		MONTH_SHORT_3: "მარ",
		MONTH_SHORT_4: "აპრ",
		MONTH_SHORT_5: "მაი",
		MONTH_SHORT_6: "ივნ",
		MONTH_SHORT_7: "ივლ",
		MONTH_SHORT_8: "აგვ",
		MONTH_SHORT_9: "სექ",
		MONTH_SHORT_10: "ოქტ",
		MONTH_SHORT_11: "ნოე",
		MONTH_SHORT_12: "დეკ",

		MONTH_1: "იანვარი",
		MONTH_2: "თებერვალი",
		MONTH_3: "მარტი",
		MONTH_4: "აპრილი",
		MONTH_5: "მაისი",
		MONTH_6: "ივნისი",
		MONTH_7: "ივლისი",
		MONTH_8: "აგვისტო",
		MONTH_9: "სექტემბერი",
		MONTH_10: "ოქტომბერი",
		MONTH_11: "ნოემბერი",
		MONTH_12: "დეკემბერი"
	},

	MenuCaptions: {
		OPTION_STYLE: "წარწერების სტილი",
		VALUE_SONY_DEFAULT: "Sony (ხან დიდი ხან პატარა)",
		VALUE_ALWAYS_SMALL: "ყოველთვის პატარა",
		VALUE_ALWAYS_BIG: "ყოველთვის დიდი"
	},

	TextEncoding: {
		OPTION_TITLE: "ტექსტის კოდირება",
		MSG_RESTART: "საჭიროებს გადატვირთვას",
		LATIN: "Latin",
		RUSSIAN:  "Russian (Windows-1251)"
	},

	KeyBindings: {
		TITLE: "ღილაკები",
		DESCRIPTION: "ღილაკების კონფიგურირება",

		DEFAULT_VALUE: "ნაგულისხმევი",

		// Contexts
		GLOBAL:  "ყველგან",
		IN_MENU: "მენიუში",
		IN_BOOK:  "წიგნში",

		// Button groups
		NUM_BUTTONS: "ციფრული ღილაკები",
		JP_BUTTONS: "ჯოისტიკის ღილაკები",
		OTHER_BUTTONS: "სხვა ღილაკები",
		VOLUME_BUTTONS: "ხმის ღილაკები",

		// Buttons
		BN_SIZE: "გადიდების ღილაკი",
		BN_BOOKMARK: "სანიშნეს ღილაკი",
		BN_BL_NEXT: "ქვედა მარცხენა 'შემდეგი' ღილ.",
		BN_BL_PREVIOUS: "ქვედა მარცხენა 'წინა' ღილ.",
		BN_SB_NEXT: "გვერდითი 'შემდეგი' ღილ.",
		BN_SB_PREVIOUS:  "გვერდითი 'წინა' ღილ.",
		BN_MENU: "მენიუს ღილაკი",
		BN_JP_LEFT: "ჯოისტიკის მარცხენა ღილ.",
		BN_JP_RIGHT: "ჯოისტიკის მარჯვენა ღილ.",
		BN_JP_UP: "ჯოისტიკის ზედა ღილ.",
		BN_JP_DOWN: "ჯოისტიკის ქვედა ღილ.",
		BN_JP_CENTER: "ჯოისტიკის შუა ღილ.",
		BN_H_SIZE: "დაჭერილი გადიდების ღილ.",
		BN_H_BOOKMARK: "დაჭერილი სანიშნეს ღილაკი",
		BN_H_BL_NEXT: "დაჭერილი ქვ. მარც. 'შემდეგი'",
		BN_H_BL_PREVIOUS: "დაჭერილი ქვ. მარც. 'წინა'",
		BN_H_MENU: "დაჭერილი მენუს ღილაკი",
		BN_H_SB_NEXT: "დაჭერილი გვერდითი 'შემდეგი'",
		BN_H_SB_PREVIOUS: "დაჭერილი გვერდითი 'წინა'",
		BN_H_JP_CENTER: "დაჭერილი ჯოისტიკის შუა ღილ.",
		BN_H_1: "დაჭერილი 1",
		BN_H_2: "დაჭერილი 2",
		BN_H_3: "დაჭერილი 3",
		BN_H_4: "დაჭერილი 4",
		BN_H_5: "დაჭერილი 5",
		BN_H_6: "დაჭერილი 6",
		BN_H_7: "დაჭერილი 7",
		BN_H_8: "დაჭერილი 8",
		BN_H_9: "დაჭერილი 9",
		BN_H_0: "დაჭერილი 0",
		BN_VOLUME_DOWN: "ხმა -",
		BN_H_VOLUME_DOWN: "დაჭერილი ხმა -",
		BN_VOLUME_UP: "ხმა +",
		BN_H_VOLUME_UP: "დაჭერილი ხმა +",

		// Actions
		ACTION_SHUTDOWN: "გათიშვა",
		ACTION_NEXT_PAGE: "შემდეგი გვერდი",
		ACTION_PREVIOUS_PAGE: "წინა გვერდი",
		ACTION_NEXT_IN_HISTORY: "წინა ისტორიაში",
		ACTION_PREVIOUS_IN_HISTORY: "შემდეგი ისტორიაში",
		ACTION_PREVIOUS_SONG: "წინა სიმღერა",
		ACTION_NEXT_SONG: "შემდეგი სიმღერა",
		ACTION_GOTO_LINK: "ბმულის გახსნა"
	},

	Screenshot: {
		TITLE: "ეკრანის სურათი",
		ACTION_TITLE: "ეკრანის სურათის გადაღება",
		SAVING_TO: "ვინახავ ",
		FAILED_TO_SAVE: "შენახვა ჩაიშალა",
		OPT_SAVETO: "ვინახავ",
		OPT_FEEDBACK: "შენახვის შეტყობინება",
		MEMORY_STICK: "Memory Stick",
		FEEDBACK_ON: "ჩარ",
		FEEDBACK_OFF: "გამ",
		SD_CARD: "SD კარტა",
		INTERNAL_MEMORY: "შიდა მეხსიერება"
	},

	BrowseFolders: {
		TITLE:  "ფოლდერების დათვალიერება",
		OPTION_SORTING_MODE: "სორტირების რეჟიმი",
		VALUE_BY_TITLE: "სათაურის მიხედვით",
		VALUE_BY_AUTHOR_THEN_TITLE: "ავტორის, შემდეგ სათაურის მიხ.",
		VALUE_BY_AUTHOR_SWAPPING: "ავტორის სახელის, შემდეგ გვარის მიხ.",
		VALUE_BY_FILENAME: "ფაილის სახელის მიხ.",
		OPTION_TITLE_SORTER: "'titleSorter' ველის მიხ.",
		ENABLED: "ჩარ",
		DISABLED: "გამ",
		OPTION_IM_ROOT: "შიდა მეხს. საწყისი ფოლდერი",
		OPTION_CARD_SCAN: "SD/MS კარტების სკანირება",
		OPTION_MOUNT: "Use mount with SD/MS (experimental)",
		NODE_RESCAN_INTERNAL_MEMORY: "შიდა მეხსიერების დასკანირება",
		NODE_COPY_TO_INTERNAL_MEMORY: "შიდა მეხსიერებაში კოპირება",
		NODE_COPY_TO_INTERNAL_MEMORY_COMMENT: "აკოპირებს ფაილს შიდა მეხსიერებაში",
		NODE_COPY_AND_RESCAN: "შიდა მეხსიერებაში კოპირება+დასკანირება",
		NODE_COPY_AND_RESCAN_COMMENT: "აკოპირებს ფაილს შ.მ.-ში და იწყებს სკანირებას",
		ERROR_TARGET_EXISTS: "შეცდომა: ფაილი ასეთი სახელით არსებობს",
		NODE_BROWSE_FOLDERS: "ფოლდერების დათვალიერება",
		NODE_BROWSE_FOLDERS_COMMENT: "ფაილური სისტემის დათვალიერება",
		NODE_INTERNAL_MEMORY: "შიდა მეხსიერება",
		NODE_MEMORY_STICK: "Memory Stick",
		NODE_MEMORY_STICK_MOUNT: "Memory Stick via Mount",
		NODE_SD_CARD: "SD კარტა",
		NODE_SD_CARD_MOUNT: "SD კარტა mount-ის გამოყებნებით"
	},

	Clock: {
		TITLE: "საათი",
		OPTION_STYLE: "საათის სტილი",
		VALUE_24H: "24 საათი",
		VALUE_12H: "12 საათი",
		OPTION_MODE: "საათის რეჟიმი",
		VALUE_ALWAYS_SHOWN: "ყოვეთვის ჩართულია",
		VALUE_SHOWN_ONLY_IN_MENU: "მხოლოდ მენიუში",
		VALUE_SHOWN_WHEN_READING: "მხოლოდ წიგნის კითხვისას",
		VALUE_OFF: "გამ",
		ACTION_TOGGLE_CLOCK: "საათის ჩართ./გამორთ.",
		AM: "am",
		PM: "pm"
	},

	PageIndex: {
		TITLE: "გვერდის სტატუსი (1 - 1)",
		INDEX_STYLE_BOOK: "ინდექსის სტილი წიგნებში",
		INDEX_MODE_BOOK: "ინდექსის რეჟიმი წიგნებში",
		INDEX_MODE_MENU: "ინდექსის რეჟიმი მენიუში",
		INDEX_STYLE_MENU: "ინდექსის სტილი მენიუში",
		OF: "-",
		ALWAYS_SHOWN: "ყოვეთვის ჩართული",
		NEVER_SHOWN: "ყოვეთვის გათიშული",
		NOT_SHOWN_IF_SINGLE_PAGE: "გატიშული ერთმაგ გვერდებზე (1 - 1)"
	},

	EpubUserStyle: {
		OPTION_EPUB_CSS_FILE: "EPUB მომხმარებლის სტილი (CSS ფაილი)",
		MSG_WARNING: "ექსპ. მოქმედებს მხოლოდ შემდგომ გახსნილ წიგნებზე",
		VALUE_DISABLED: "გათიშული"
	},

	ReadingList: {
		FUNC_X_BOOKS: FUNC_X_BOOKS,
		VALUE_DISABLED: "ერთი წიგნი",
		VALUE_3: "სამი წიგნი",
		VALUE_10: "ათი წიგნი"
	},

//ReadMark	ReadMark: {
//		TITLE_UNREAD: "Mark Book - Already Read",
//		TITLE_READ: "Mark Book - Not Yet Read",
//	},

	TextScale: {
		OPTION_SCALE_DEFAULT: "ნაგულისხმები მასშტაბი",
		VALUE_SMALL: "(S) პატარა",
		VALUE_MEDIUM: "(M) საშუალო",
		VALUE_LARGE: "(L) დიდი",
		VALUE_DISABLED: "გამორთულია",
		VALUE_ENABLED: "ჩართულია"
	},

	MenuTuning: {
		FUNC_X_ITEMS: FUNC_X_ITEMS,
		OPTION_OUTER: "მენიუს სათაური შეიცავს",
		NODE_OTHERS: "მულტიმედია",
		NODE_GAMES_AND_UTILS: "თამაშები და უტილიტები"
	},
	
	Dictionary: {
		TITLE: "ლექსიკონი",
		WARN_DICT_DISABLED: "ლექსიკონი გამორთულია!!",
		WARN_DICT_DOESNT_EXIST: "ლექსიკონის ფაილი არ არსებობს!",
		ACTION_DICTIONARY: "ლექსიკონის გაშვება",
		OPTION_DICTIONARY: "ლექსიკონის ფაილი",
		VALUE_DISABLED: "გამორთულია"
	}
};
