// Name: ViewerSettings_600
// Description: Allows to 
//	disables doubleTapAction and so dictionary
//	disable pageturn gesture
// Based on ViewerSettings_x50 by Mark Nord
// Modified for the 600 by Ben Chenoweth
//
// History:
//	2011-08-31 Ben Chenoweth - Initial version
//  2011-09-01 Ben Chenoweth - Used appropriate icons
//	2011-09-02 quisvir - Added option to enable scrolling in Zoom Lock mode
//	2011-09-08 quisvir - Renamed scrolling (in zoom lock) to panning
//	2011-09-29 quisvir - Added Page Turn by Single Tap

tmp = function() {

	// Localize	 	
	var L = Core.lang.getLocalizer("ViewerSettings_x50");
	var log = Core.log.getLogger('ViewerSettings_600');

	// Constants

	// Enable Page Turn by Single Tap
	var oldonPageTapped = Fskin.kbookPage.readingTracker.tap;
	Fskin.kbookPage.readingTracker.tap = function (target, x, y) {
		if (ViewerSettings_600.options.PageTurnBySingleTap == 'true' && !this.selection.length) {
			var olddoBlink = kbook.model.doBlink;
			kbook.model.doBlink = function () {}
			oldonPageTapped.apply(this, arguments);
			kbook.model.doBlink = olddoBlink;
		}
		else oldonPageTapped.apply(this, arguments);
	}
	
	var oldselectNoneWithoutUpdate = Fskin.kbookPage.selectNoneWithoutUpdate;
	Fskin.kbookPage.selectNoneWithoutUpdate = function () {
		if (ViewerSettings_600.options.PageTurnBySingleTap == 'true' && !this.selection.length) this.doNext();
		else oldselectNoneWithoutUpdate.apply(this, arguments);
	}
	
	// Enable panning in Zoom Lock mode
	var zoomlockold;
	
	var oldZoomdoDrag = Fskin.kbookZoomOverlay.doDrag;
	Fskin.kbookZoomOverlay.doDrag = function (x, y, type, tapCount) {
		zoomlockold = this.isZoomLock;
		if (Core.addonByName.ViewerSettings_600.options.ZoomLockPanning == "true" && zoomlockold) { this.isZoomLock = false; }
		oldZoomdoDrag.apply(this, arguments);
		this.isZoomLock = zoomlockold;
	}
	
	var oldZoomOverlaydone = Fskin.kbookZoomOverlay.done;
	Fskin.kbookZoomOverlay.done = function () {
		if (zoomlockold) { this.isZoomLock = true; }
		oldZoomOverlaydone.apply(this, arguments);
		this.isZoomlock = zoomlockold;
	};

	Fskin.kbookZoomOverlay.canLine = function () {
		if (this.getVariable('STATE') == 'PAGE' && this.isZoomLock && Core.addonByName.ViewerSettings_600.options.ZoomLockPanning != "true") { return true; }
		else { return false; }
	};

	Fskin.kbookZoomOverlay.canLineAndHold = function () {
		if (this.getVariable('STATE') == 'PAGE' && this.isZoomLock && Core.addonByName.ViewerSettings_600.options.ZoomLockPanning != "true") { return true; }
		else { return false; }
	};

	// overload Fskin.kbookPage.doSelectWord called by Fskin.kbookPage.readingTracker.doubleTap to disable Dictionary
	var oldDoSelectWord = Fskin.kbookPage.doSelectWord;
	var doSelectWord = function (){
		if (Core.addonByName.ViewerSettings_600.options.NoDictionary === "false") {
			return oldDoSelectWord.apply(this, arguments);
		}
	}

	var ViewerSettings_600 = {
		name: "ViewerSettings_600",
		settingsGroup: "viewer",
		optionDefs: [
			{
				name: "NoDictionary",
				title: L("OPTION_NODICT"),
				icon: "NODICTIONARY",
				defaultValue: "false",
				values: ["true", "false"],
				valueTitles: {
					"true": L("VALUE_TRUE"),
					"false": L("VALUE_FALSE")
				}
			},
			{
				name: "NoGesturePageTurn",
				title: L("OPTION_NOGESTURE"),
				icon: "GESTURE",
				defaultValue: "false",
				values: ["true", "false"],
				valueTitles: {
					"true": L("VALUE_TRUE"),
					"false": L("VALUE_FALSE")
				}	
			},
			{
				name: "PageTurnBySingleTap",
				title: L("PAGE_TURN_BY_SINGLE_TAP"),
				defaultValue: "false",
				values: ["true", "false"],
				valueTitles: {
					"true": L("VALUE_TRUE"),
					"false": L("VALUE_FALSE")
				}	
			},
			{
				name: "ZoomLockPanning",
				title: L("ZOOMLOCK_PANNING"),
				icon: "ZOOMSCROLL",
				defaultValue: "false",
				values: ["true", "false"],
				valueTitles: {
					"true": L("VALUE_TRUE"),
					"false": L("VALUE_FALSE")
				}
			}
		],
		/**
		* @constructor
		*/
		onInit: function () {
			Fskin.kbookPage.doSelectWord = doSelectWord;
			this.onSettingsChanged();
		},
		onSettingsChanged: function (propertyName, oldValue, newValue, object) {
			Fskin.kbookPage.canLine = (ViewerSettings_600.options.NoGesturePageTurn === "true") ? function () {return false;} : function () {return !this.preventLine;};	
		},
		actions: [{
			name: "toggleGestureOnOff",
			title: L("ACTION_toggleGestureOnOff"),
			group: "Utils",
			icon: "GESTURE",
			action: function () {
				if (ViewerSettings_600.options.NoGesturePageTurn === "true") {
					ViewerSettings_600.options.NoGesturePageTurn = "false";
				}
				else {
					ViewerSettings_600.options.NoGesturePageTurn = "true";
				}
				Fskin.kbookPage.canLine = (ViewerSettings_600.options.NoGesturePageTurn === "true") ? function () {return false;} : function () {return !this.preventLine;};
			}
		}] 	
	};

	Core.addAddon(ViewerSettings_600);
};
try {
	tmp();
} catch (e) {
	// Core's log
	log.error("in ViewerSettings_600.js", e);
}
