// Language: English (sample)
// Description: Localization file
// Author: kartu
// Translator:
//
// History:
//	2010-04-30 kravitz - Refactored, added new strings

var FUNC_X_SOMETHING = function (n, s) {
	if (n > 1) {
		return n + " " + s[0];
	}
	if (n == 1) {
		return s[1];
	}
	return s[2];
};

var FUNC_X_BOOKS = function (n) {
	return FUNC_X_SOMETHING(n, ["books", "1 book", "No book"]);
};

var FUNC_X_SETTINGS = function (n) {
	return FUNC_X_SOMETHING(n, ["settings", "1 setting", "No setting"]);
};

var FUNC_X_ITEMS = function (n) {
	return FUNC_X_SOMETHING(n, ["items", "1 item", "No item"]);
};

var FUNC_X_PAGES = function (n) {
	return FUNC_X_SOMETHING(n, ["pages", "1 page", "No page"]);
};

var FUNC_X_PICTURES = function (n) {
	return FUNC_X_SOMETHING(n, ["pictures", "1 picture", "No picture"]);
};

var FUNC_X_SONGS = function (n) {
	return FUNC_X_SOMETHING(n, ["songs", "1 song", "No song"]);
};

var FUNC_X_BOOKMARKS = function (n) {
	return FUNC_X_SOMETHING(n, ["bookmarks", "1 bookmark", "No bookmark"]);
};

var FUNC_X_COLLECTIONS = function (n) {
	return FUNC_X_SOMETHING(n, ["collections", "1 collection", "No collection"]);
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
		DO_NOT_DISCONNECT: "Do not disconnect",
		USB_CONNECTED: "USB connected",
		DEVICE_LOCKED: "Device locked",

		// About, translate either all or none
		ABOUT_PRSP: "PRS+ Script: @@@script@@@\n" + "PRS+ Firmware: @@@firmware@@@\n" + "Author: Mikheil Sukhiashvili aka kartu (kartu3@gmail.com) using work of: " + "igorsk, boroda, obelix, pepak, llasram and others.\n" + "© GNU Lesser General Public License.",
		ABOUT_1: "Copyright ©2006-2008 Sony Corporation",
		ABOUT_2: "Adobe, the Adobe logo, Reader and PDF are either registered trademarks or" + " trademarks of Adobe Systems Incorporated in the United States and/or other countries.",
		ABOUT_3: "MPEG Layer-3 audio coding technology and patents licensed by Fraunhofer IIS and Thomson." + " MPEG-4 AAC audio coding technology licensed by Fraunhofer IIS (www.iis.fraunhofer.de/amm/).",
		ABOUT_4: "Application software designed and implemented by Kinoma (www.kinoma.com). Portions Copyright ©2006,2007 Kinoma, Inc.",
		ABOUT_5: "Bitstream is a registered trademark, and Dutch, Font Fusion, and Swiss are trademarks, of Bitstream, Inc.",
		ABOUT_6: "Portions of this software are Copyright ©2005 The FreeType Project (www.freetype.org). All rights reserved.",
		ABOUT_7: "This software is based in part on the work of the Independent JPEG Group.",
		AUTHORIZED_SONY: "Authorized for the eBook Store.",
		NOT_AUTHORIZED_SONY: "Not authorized for the eBook Store.",
		AUTHORIZED_ADOBE: "This device is authorized for Adobe DRM protected content.",
		NOT_AUTHORIZED_ADOBE: "This device is not authorized for Adobe DRM protected content.",
		SONY_FW_VERSION: "Version",
		DEVICE_ID: "Device",

		// Mime & card names
		RICH_TEXT_FORMAT: "Rich Text Format",
		ADOBE_PDF: "Adobe PDF",
		EPUB_DOCUMENT: "EPUB document",
		BBEB_BOOK: "BBeB Book",
		PLAIN_TEXT: "Plain text",
		INTERNAL_MEMORY: "Internal memory",
		MEMORY_STICK: "Memory Stick",
		SD_CARD: "SD Memory",

		// Main.xml & kbook.so stuff
		INVALID_FORMAT: "Invalid Format!",
		FORMATTING: "Formatting...",
		LOADING: "Loading...",
		LOW_BATTERY: "Low Battery!",
		HR_WARNING: "Do you want to DELETE all content, restore all factory settings, and clear the DRM authorization state?\n\nYes - Press 5\nNo - Press MENU",
		DEVICE_SHUTDOWN: "Device Shutdown",
		PRESS_MARK_TO_SHUTDOWN: "Press MARK to shutdown",
		THIS_DEVICE: "this device.",
		PRESS_MARK_TO_DELETE: "Press MARK to",
		THIS_BOOK: "delete book.",
		FORMAT_INTERNAL_MEMORY: "Format Internal Memory",
		PRESS_MARK_TO_FORMAT: "Press MARK to format",
		MSG_INTERNAL_MEMORY: "internal memory.",
		RESTORE_DEFAULTS: "Restore Defaults",
		PRESS_MARK_TO_RESTORE: "Press MARK to restore",
		DEFAULT_SETTINGS: "default settings.",
		UPPER_PAGE: "PAGE",
		ONE_OF_ONE: "1 of 1",
		NO_BATTERY: "No battery!",
		FORMATTING_INTERNAL_MEMORY: "Formatting Internal Memory...",
		SHUTTING_DOWN: "Shutting down...",

		// Root menu
		CONTINUE: "Continue Reading",
		BOOKS_BY_TITLE: "Books by Title",
		BOOKS_BY_AUTHOR: "Books by Author",
		BOOKS_BY_DATE: "Books by Date",
		COLLECTIONS: "Collections",
		ALL_BOOKMARKS: "All Bookmarks",
		NOW_PLAYING: "Now Playing",
		MUSIC: "Music",
		PICTURES: "Pictures",
		SETTINGS: "Settings",

		// In Settings
		// orientation
		ORIENTATION: "Orientation",
		HORIZONTAL: "Horizontal",
		VERTICAL: "Vertical",
		// set date
		SET_DATE: "Set Date",
		YEAR: "Year",
		MONTH: "Month",
		DATE: "Date", // Day
		HOUR: "Hour",
		MINUTE: "Minute",
		// slideshow
		SLIDESHOW: "Slideshow",
		SS_ON: "On",
		SS_OFF: "Off",
		SS_TURN: "Turn",
		SS_DURATION: "Duration",
		SECONDS: "Seconds",
		// auto standby (aka sleep mode)
		AUTOSTANDBY: "Sleep Mode",
		AS_ON: "On",
		AS_OFF: "Off",
		AS_TURN: "Turn",
		// about
		ABOUT: "About",
		// reset to factory settings
		RESET_TO_FACTORY: "Reset to factory settings",

		// In Advanced Settings
		ADVANCED_SETTINGS: "Advanced Settings",
		// screen lock (aka device lock)
		SCREEN_LOCK: "Device Lock",
		SL_OFF: "Off",
		SL_ON: "On",
		SL_CODE: "Code",
		SL_TURN: "Turn",
		// format device
		FORMAT_DEVICE: "Format Device",

		// In Book menu
		BEGIN: "Begin",
		END: "End",
		BOOKMARKS: "Bookmarks",
		CONTENTS: "Contents",
		HISTORY: "History",
		INFO: "Info",
		UTILITIES: "Utilities",

		// In Book Utilities
		REMOVE_ALL_BOOKMARKS: "Remove All Bookmarks",
		CLEAR_HISTORY: "Clear History",
		DELETE_BOOK: "Delete Book",

		// In Books by Date
		TODAY: "Today",
		EARLIER_THIS_WEEK: "Earlier This Week",
		LAST_WEEK: "Last Week",
		EARLIER_THIS_MONTH: "Earlier This Month",
		LAST_MONTH: "Last Month",
		EARLIER_THIS_QUARTER: "Earlier This Quarter",
		LAST_QUARTER: "Last Quarter",
		EARLIER_THIS_YEAR: "Earlier This Year",
		LAST_YEAR: "Last Year",
		OLDER: "Older",

		PAGE: "Page",
		PART: "Part",
		OF: "of",
		NO_BOOK: "No book",
		NO_SONG: "No song",

		// Info title strings, comma separated, no spaces after comma
		INFO_TITLES: "Cover,Title,Author,Publisher,Category,eBook ID,Kind,Date,Size,Location,File,Digital Rights,Expires",

		// Titles and criterions for "Books by Title" and "Books by Folder"
		// title is displayed, "criterion" is used for sorting.
		//
		// NOTE: if localization doesn't need custom Books by sorting, just remove CUSTOM_SORT, TITLE_*, CRITERION_* items
		CUSTOM_SORT: true,
		TITLE_1: "0-9",
		CRITERION_1: "0123456789",
		TITLE_2: "A B C",
		CRITERION_2: "ABCabc",
		TITLE_3: "D E F",
		CRITERION_3: "DEFdef",
		TITLE_4: "G H I",
		CRITERION_4: "GHIghi",
		TITLE_5: "J K L",
		CRITERION_5: "JKLjkl",
		TITLE_6: "M N O",
		CRITERION_6: "MNOmno",
		TITLE_7: "P Q R S",
		CRITERION_7: "PQRSpqrs",
		TITLE_8: "T U V W",
		CRITERION_8: "TUVWtuvw",
		TITLE_9: "X Y Z",
		CRITERION_9: "XYZxyz",
		TITLE_0: "Other",
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
		NODE_PRSP_SETTINGS:  "PRS+ Settings",
		GROUP_MENU_TITLE: "Menu Settings",
		GROUP_VIEWER_TITLE: "Viewer Settings"
	},

	CoreLang: {
		TITLE: "Localization",
		COMMENT: "Requires restart",
		OPTION_LANG: "Language",

		OPTION_DATE_FORMAT: "Date Format",
		ddMMMYY: "31/Jan/99",
		ddMONTHYY: "31/January/99",
		ddMMMYYYY: "31/Jan/1999",
		ddMONTHYYYY: "31/January/1999",

		OPTION_DATE_SEPARATOR: "Date Separator",
		VALUE_SPACE: "Space",
		VALUE_NONE: "None",

		MONTH_SHORT_1: "Jan",
		MONTH_SHORT_2: "Feb",
		MONTH_SHORT_3: "Mar",
		MONTH_SHORT_4: "Apr",
		MONTH_SHORT_5: "May",
		MONTH_SHORT_6: "Jun",
		MONTH_SHORT_7: "Jul",
		MONTH_SHORT_8: "Aug",
		MONTH_SHORT_9: "Sep",
		MONTH_SHORT_10: "Oct",
		MONTH_SHORT_11: "Nov",
		MONTH_SHORT_12: "Dec",

		MONTH_1: "January",
		MONTH_2: "February",
		MONTH_3: "March",
		MONTH_4: "April",
		MONTH_5: "May",
		MONTH_6: "June",
		MONTH_7: "July",
		MONTH_8: "August",
		MONTH_9: "September",
		MONTH_10: "October",
		MONTH_11: "November",
		MONTH_12: "December"
	},

	MenuCaptions: {
		OPTION_STYLE: "Menu Captions Style",
		VALUE_SONY_DEFAULT: "Sony default",
		VALUE_ALWAYS_SMALL: "Always small",
		VALUE_ALWAYS_BIG: "Always big"
	},

	TextEncoding: {
		OPTION_TITLE: "TXT and RTF Books Encoding",
		MSG_RESTART: "Requires restart!",
		LATIN: "Latin",
		RUSSIAN:  "Russian (Windows-1251)"
	},

	KeyBindings: {
		TITLE: "Key Bindings",
		DESCRIPTION: "Allows to bind actions to keys",

		DEFAULT_VALUE: "Default",

		// Contexts
		GLOBAL:  "Global",
		IN_MENU: "When in Menu",
		IN_BOOK:  "When Reading Book",

		// Button groups
		NUM_BUTTONS: "Numeric Buttons",
		JP_BUTTONS: "Joypad Buttons",
		OTHER_BUTTONS: "Other Buttons",
		VOLUME_BUTTONS: "Volume Buttons",

		// Buttons
		BN_SIZE: "Size Button",
		BN_BOOKMARK: "Bookmark Button",
		BN_BL_NEXT: "Bottom Left 'Next'",
		BN_BL_PREVIOUS: "Bottom Left 'Previous'",
		BN_SB_NEXT: "Sidebar 'Next'",
		BN_SB_PREVIOUS:  "Sidebar 'Previous'",
		BN_MENU: "Menu Button",
		BN_JP_LEFT: "Joypad Left",
		BN_JP_RIGHT: "Joypad Right",
		BN_JP_UP: "Joypad Up",
		BN_JP_DOWN: "Joypad Down",
		BN_JP_CENTER: "Joypad Center",
		BN_H_SIZE: "Holding Size Button",
		BN_H_BOOKMARK: "Holding Bookmark Button",
		BN_H_BL_NEXT: "Holding Bottom Left 'Next Page'",
		BN_H_BL_PREVIOUS: "Holding Bottom Left 'Previous Page'",
		BN_H_MENU: "Holding Menu Button",
		BN_H_SB_NEXT: "Holding Sidebar 'Next Page'",
		BN_H_SB_PREVIOUS: "Holding Sidebar 'Previous Page'",
		BN_H_JP_CENTER: "Holding Joypad Center Button",
		BN_H_1: "Hold 1",
		BN_H_2: "Hold 2",
		BN_H_3: "Hold 3",
		BN_H_4: "Hold 4",
		BN_H_5: "Hold 5",
		BN_H_6: "Hold 6",
		BN_H_7: "Hold 7",
		BN_H_8: "Hold 8",
		BN_H_9: "Hold 9",
		BN_H_0: "Hold 0",
		BN_VOLUME_DOWN: "Volume -",
		BN_H_VOLUME_DOWN: "Hold Volume -",
		BN_VOLUME_UP: "Volume +",
		BN_H_VOLUME_UP: "Hold Volume +",

		// Actions
		ACTION_SHUTDOWN: "Shutdown",
		ACTION_NEXT_PAGE: "Next Page",
		ACTION_PREVIOUS_PAGE: "Previous Page",
		ACTION_NEXT_IN_HISTORY: "Next in History",
		ACTION_PREVIOUS_IN_HISTORY: "Previous in History",
		ACTION_PREVIOUS_SONG: "Previous Song",
		ACTION_NEXT_SONG: "Next Song"
	},

	Screenshot: {
		TITLE: "Screenshot",
		ACTION_TITLE: "Take a Screenshot",
		SAVING_TO: "Saving to ",
		FAILED_TO_SAVE: "Failed to save",
		OPT_SAVETO: "Save to",
		OPT_FEEDBACK: "Show Save Progress",
		MEMORY_STICK: "Memory stick",
		FEEDBACK_ON: "On",
		FEEDBACK_OFF: "Off",
		SD_CARD: "SD card",
		INTERNAL_MEMORY: "Internal memory"
	},

	BrowseFolders: {
		TITLE:  "Browse Folders",
		OPTION_SORTING_MODE: "Sorting Mode",
		VALUE_BY_TITLE: "By title",
		VALUE_BY_AUTHOR_THEN_TITLE: "By author then title",
		VALUE_BY_AUTHOR_SWAPPING: "By author swapping name/surname",
		VALUE_BY_FILENAME: "By filename",
		OPTION_TITLE_SORTER: "Use 'titleSorter' Field, when Sorting",
		ENABLED: "Enabled",
		DISABLED: "Disabled",
		OPTION_IM_ROOT: "Internal Memory Root Folder",
		OPTION_CARD_SCAN: "SD/MS Card Scan",
		OPTION_MOUNT: "Use Mount with SD/MS (experimental)",
		NODE_RESCAN_INTERNAL_MEMORY: "Rescan Internal Memory",
		NODE_COPY_TO_INTERNAL_MEMORY: "Copy to Internal Memory",
		NODE_COPY_TO_INTERNAL_MEMORY_COMMENT: "Copies file to the internal memory root",
		NODE_COPY_AND_RESCAN: "Copy & Rescan Internal Memory",
		NODE_COPY_AND_RESCAN_COMMENT: "Copies file to the internal memory root and rescans books",
		ERROR_TARGET_EXISTS: "Error, target file exists",
		NODE_BROWSE_FOLDERS: "Browse Folders",
		NODE_BROWSE_FOLDERS_COMMENT: "Browse the file system",
		NODE_INTERNAL_MEMORY: "Internal Memory",
		NODE_MEMORY_STICK: "Memory Stick",
		NODE_MEMORY_STICK_MOUNT: "Memory Stick via Mount",
		NODE_SD_CARD: "SD Card",
		NODE_SD_CARD_MOUNT: "SD Card via Mount"
	},

	Clock: {
		TITLE: "Clock",
		OPTION_STYLE: "Clock Style",
		VALUE_24H: "24 hours",
		VALUE_12H: "12 hours",
		OPTION_MODE: "Clock Mode",
		VALUE_ALWAYS_SHOWN: "Always shown",
		VALUE_SHOWN_ONLY_IN_MENU: "Shown only in menu",
		VALUE_SHOWN_WHEN_READING: "Shown only when reading",
		VALUE_OFF: "Off",
		ACTION_TOGGLE_CLOCK: "Toggle Clock",
		AM: "am",
		PM: "pm"
	},

	PageIndex: {
		TITLE: "Page Index",
		INDEX_STYLE_BOOK: "Index Style in Books",
		INDEX_MODE_BOOK: "Index Mode in Books",
		INDEX_MODE_MENU: "Index Mode in Menu",
		INDEX_STYLE_MENU: "Index Style in Menu",
		OF: "of",
		ALWAYS_SHOWN: "Always shown",
		NEVER_SHOWN: "Never shown",
		NOT_SHOWN_IF_SINGLE_PAGE: "Not shown on single pages"
	},

	EpubUserStyle: {
		OPTION_EPUB_CSS_FILE: "User EPUB Style (CSS File)",
		MSG_WARNING: "Affects only books opened afterwards!",
		VALUE_DISABLED: "Disabled"
	},

	ReadingList: {
		FUNC_X_BOOKS: FUNC_X_BOOKS,
		VALUE_DISABLED: "One book",
		VALUE_3: "Three books",
		VALUE_10: "Ten books"
	},

//ReadMark	ReadMark: {
//		TITLE_UNREAD: "Mark Book - Already Read",
//		TITLE_READ: "Mark Book - Not Yet Read",
//	},

	TextScale: {
		OPTION_SCALE_DEFAULT: "Default Scale",
		VALUE_SMALL: "(S)mall Size",
		VALUE_MEDIUM: "(M)edium Size",
		VALUE_LARGE: "(L)arge Size",
		VALUE_DISABLED: "Disabled",
		VALUE_ENABLED: "Enabled"
	},

	MenuTuning: {
		FUNC_X_ITEMS: FUNC_X_ITEMS,
		OPTION_OUTER: "Top Level Menu Contains",
		NODE_OTHERS: "Multimedia",
		NODE_GAMES_AND_UTILS: "Games & Utilities"
	}
};
