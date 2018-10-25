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
	return false;
});

$(".main-footer .toggle-mnu").click(function () {
	$("html, body").animate({ scrollTop: $(document).height()}, "slow");
	return false;

});

$(".top").click(function () {
	$("html, body").animate({ scrollTop: 0}, "slow");
	return false;

});

$(".arrow-down").click(function () {
	$("html, body").animate({ scrollTop: $(".main-head").height() + 126}, "slow");
	return false;

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

$(".slider-container").owlCarousel({
	items: 1, 
	loop: true, 
	nav: true, 
	navText: "",
	smartSpeed: 1000,
	autoplay:true,
	autoplayHoverPause:true

});


$(".homesect .section-bottom .button").click(function() {
	$("#callback h4").html($(this).text());
	$("#callback input[name=formname]").val($(this).text());
}).magnificPopup({
	type:"inline",
	mainClass: "mfp-forms"
});

// Animations
$(".section-head h2, .section-head p").animated("fadeInLeft");
$(".section_8 .forms").animated("fadeInRight");
$(".info-item-wrap").animated("zoomIn");


$(".s2-item-wrap").waypoint(function() {
	$(".s2-item").each(function(index) {
		var ths = $(this);
		setInterval(function() {
			$(ths).addClass("on");
		}, 150*index)
	})
}, { offset: "30%"})

$(".section_8").waypoint(function() {
	$(".s8-item").each(function(index) {
		var ths = $(this);
		setInterval(function() {
			$(ths).addClass("on");
		}, 150*index)
	})
}, { offset: "30%"})

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
	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$(".forms").trigger("reset");
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
		console.log(err);
		
	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

