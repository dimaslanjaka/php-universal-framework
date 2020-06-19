import logger from 'fancy-log';
import * as chalk from "chalk";

class log {
	constructor() {
		if (arguments.length) {
			log.log(arguments);
		}
	}
	/**
	 * Generate Random Hex Color
	 */
	static hexColor() {
		return Math.floor(Math.random() * 16777215).toString(16);
	}
	/**
	 * Indicator rainbow
	 */
	static enable_rainbow: boolean = false;
	static rainbow = function(want: boolean){
		log.enable_rainbow = want;
	};
	/**
	 * console.log
	 */
	static log(...arg: any[]){
		if (arguments.length) {
			var result = [];
			for (const key in arguments) {
				if (arguments.hasOwnProperty(key)) {
					var args = arguments[key];
					if (typeof args == 'boolean') {
						if (args) {
							args = chalk.greenBright(args);
						} else {
							args = chalk.redBright(args);
						}
					}
					result.push(args);
				}
			}
			logger(result.join(', '));
		}
	}
}

if (typeof module != 'undefined'){
	module.exports = log;
}