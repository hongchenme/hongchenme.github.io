$(document).ready(function () {
	
	const buildings = "#wccc, #voodoo, #mod, #citizens, #frankie, #corner, #purch, #boho, #park, #knead, #sust, #family, #preserve, #post, #fat, #odi, #tillie, #las, #sweat, #bombshell, #dattola, #trovo, #steelcup, #upmc, #foundry";

	const buildingsHighlight = "#act_wccc, #act_voodoo,  #act_mod, #act_citizens, #act_frankie, #act_corner,  #act_purch, #act_boho, #act_park, #act_knead, #act_sust, #act_family, #act_preserve, #act_post, #act_fat, #act_odi, #act_tillie, #act_las, #act_sweat, #act_bombshell, #act_dattola, #act_trovo, #act_steelcup, #act_upmc, #act_foundry";

	const lightcasts = "#sign1Light, #sign2Light, #sign3Light, #sign4Light, #sign5Light";

	const signmasks = "#sign1Mask, #sign2Mask,#sign3Mask,#sign4Mask,#sign5Mask";

	const signButtonsLight = "#act_sign0_button, #act_sign1_button,#act_sign2_button, #act_sign3_button, #act_sign4_button, #act_sign5_button";

	const signButtons = "#sign0_button, #sign1_button, #sign2_button,#sign3_button, #sign4_button, #sign5_button"

	/*
	-implement url query string (subsequently, also for QR codes) to load different html doc locations according to the signages (sign1, sign2,....sign5).
	-url query string example: www.domainTBD.com/?loc=sign1

	table of signage's url for QR Code 
	----------------------------------
	sign 1	|www.domainTBD.com/?loc=sign1
	sign 2	|www.domainTBD.com/?loc=sign2
	sign 3	|www.domainTBD.com/?loc=sign3
	sign 4	|www.domainTBD.com/?loc=sign4
	sign 5	|www.domainTBD.com/?loc=sign5
	*/
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const signNum = urlParams.get('loc');

	//hide the interactive elements during map initialization
	$(buildingsHighlight).hide();
	$(lightcasts).hide();
	$(signButtonsLight).hide();
	$(signmasks).hide();

	//jump to a specific signage on the map using sigNum
	if (signNum) {
		elemId = "#".concat(signNum);
		window.location.href = elemId;
		$(elemId.concat("Light")).show(2500);
		$(elemId.concat("Mask")).show(2500);
	}

	//bind onclick events with sign buttons at the top of the page
	$(signButtons).click(function () {
		$(signButtonsLight).hide();
		$("#act_".concat($(this).attr("id"))).show();
		window.location.href = "#".concat($(this).attr("id").split("_")[0]);
		$(lightcasts).hide();
		$(signmasks).hide();
		if ($(this).attr("id") !== "sign0_button") {
			$("#".concat($(this).attr("id").split("_")[0], "Light")).show(2000);
			$("#".concat($(this).attr("id").split("_")[0], "Mask")).show(2000);
		}

	});

	//bind hover effects with sign button at the top of the page
	$(signButtons).hover(function () {
		$('#act_'.concat($(this).attr('id'))).show();
	}, function () {
		$('#act_'.concat($(this).attr('id'))).hide();
	});

	//bind onclick events with buildings
	$(buildings).click(function () {
		let delayTime = 500;
		let newurl = 'building.html?bd='.concat($(this).attr('id'));

		$('#act_'.concat($(this).attr('id'))).show("fast");

		setTimeout(function () { window.location.href = newurl; }, delayTime);

	});

	//bind hover effects with buildings
	$(buildings).hover(function () {
		$('#act_'.concat($(this).attr('id'))).show();
	}, function () {
		$('#act_'.concat($(this).attr('id'))).hide();
	});


});


