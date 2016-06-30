(function(){
	console.log("We are here!");

	var ui = {
		welcome: $(".jWelcome"),
		getText: $(".jGetText")
	};

	function bindEvents() {
		ui.getText.on("click", function() {
			$.get("/api/getwelcome/").done(function(data) {
				ui.welcome.text(data);
			}).fail(function(res) {
				console.log("Error");
			});
		});
	}

	bindEvents();
	
})();