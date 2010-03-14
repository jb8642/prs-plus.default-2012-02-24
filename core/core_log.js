// Name: Log
// Description: logging related methods 
// Author: kartu
//
// History:
//	2010-03-14 kartu - Initial version, refactored from Utils

Core.log = {
	loggers: {},
	createLogger: function (cls, level) {
		if (typeof level === "undefined") {
			level = Core.config.defaultLogLevel;
		}
		var result = {};
		result.name = cls;
		result.log = this.log;
		result.setLevel = this.setLevel;
		result.setLevel(level);
		return result;
	},
	getLogger: function (cls, level) {
		var loggers = this.loggers;
		if (loggers.hasOwnProperty(cls)) {
			return loggers[cls];
		} else {
			var logger = this.createLogger(cls, level);
			loggers[cls] = logger;
			return logger;
		}
	},		
	log : function (msg, level) {
		try {
			if (typeof level === "undefined") {
				level = "";
			} else {
				level = " " + level;
			}
			var stream = new Stream.File(config.logFile, 1, 0);
			try {
				stream.seek(stream.bytesAvailable);
				var d = new Date();
				var dateStr = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " +  d.getHours() +
					":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds();
				stream.writeLine(dateStr + level + " " + this.name  + "\t" + msg);
			} catch (ignore) {
			} finally {
			    stream.close();
			}
		} catch (ignore2) {
		}
	},
	setLevel: function (level) {
		this.trace = this.info = this.warn = this.error = Core.log.dummy;
		switch (level) {
			case "trace":
				this.trace = Core.log.trace;// fallthrough
			case "info":
				this.info = Core.log.info;// fallthrough
			case "warn":
				this.warn = Core.log.warn; // fallthrough
			case "error":
				this.error = Core.log.error;// fallthrough
		}
	},
	trace: function (msg) { this.log(msg, "T"); },
	info: function (msg) { this.log(msg, "I"); },
	warn: function (msg) { this.log(msg, "W"); },
	error: function (msg) { this.log(msg, "E"); },
	dummy: function () {}
};

