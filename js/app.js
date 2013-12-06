define([
	'config',
	'gui'

],function(
	Config,
	GUI

){

	function App () {

	}

	App.prototype.init = function () {

		window.Config = Config;
		Config.init();

		// instances
		// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

		Config.App = this;

	};

	return new App();
});