$(document).ready(function() {


	$(".toggle-mnu").click(function () { 
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle("normal", function () { 
			//Delete attribute `style` after animation
			if ($(this).css("display") === "none") {
				$(this).removeAttr("style");
			}
		 });
		 return false;
	});

$(".main-mnu li").click(function () { 
	$(".main-mnu li").removeClass("active");
	$(this).toggleClass("active");
});

$(".s1-bottom .info-item").equalHeights();
$(".section_1 .section-content .info-item").equalHeights();
$(".section_3 .section-content .info-item").equalHeights();

$(".section_4").waypoint(function() {
	$(".section_4 .card").each(function(index) {
		var ths = $(this);
		setInterval(function() {
			$(ths).removeClass("card-off").addClass("card-on");
		}, 150*index)
	})
}, { offset: "20%"})

$(".section_5").waypoint(function() {
	$(".section_5 .tc-item").each(function(index) {
		var ths = $(this);
		setTimeout(function() {
			var myAnimation = new DrawFillSVG({
				elementId: "tc-svg-" + index
			});

	
		}, 500*index)
	});
	this.destroy();
}, {offset: "20%"})

$(".section_6").waypoint(function() {
	$(".section_6 .team").each(function(index) {
		var ths = $(this);
		setInterval(function() {
			$(ths).removeClass("team-off").addClass("team-on");
		}, 150*index)
	})
}, { offset: "20%"})

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
