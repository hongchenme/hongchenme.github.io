$(document).ready(function () {

	/*Do not modify codes below*/
	const fetch_string = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tq=${encodeURIComponent("select B where A=")}%22${building}%22`;

	$("#carousel-now").hide();
	$("#carousel-hist").hide();
	$("#hist").hide();
	$("#hist-title").hide();

	fetch(fetch_string)
		.then(res => res.text())
		.then(text => {
			let building_json = JSON.parse(JSON.parse(text.substr(47).slice(0, -2)).table.rows[0].c[0].v);

			$("#name").prepend(building_json.name);
			$("#link").attr("href", building_json.link);
			$("#desc").prepend(building_json.desc);

			if (building_json.histDesc) {
				$("#hist").append(building_json.histDesc);
				$("#hist").show();
				$("#hist-title").show();
			}

			for (let i = 0; i < building_json.imageFile; i++) {
				$("#carousel-now-items").append("<div><img></div>");

				if (i == 0) {
					$("#carousel-now-items div:last-child").attr("class", "carousel-item active");
				} else {
					$("#carousel-now-items div:last-child").attr("class", "carousel-item");
				}

				$("#carousel-now-items div:last-child img").attr("class", "d-block w-100");
				$("#carousel-now-items div:last-child img").attr("src", building_json.imagePath.concat(i, ".jpg"));
			}
			$("#carousel-now").show();

			if (building_json.histImagePath) {
				for (let i = 0; i < building_json.histImageFile; i++) {
					$("#carousel-hist-items").append("<div><img></div>");

					if (i == 0) {
						$("#carousel-hist-items div:last-child").attr("class", "carousel-item active")
					} else {
						$("#carousel-hist-items div:last-child").attr("class", "carousel-item")
					}

					$("#carousel-hist-items div:last-child img").attr("class", "d-block w-100");
					$("#carousel-hist-items div:last-child img").attr("src", building_json.histImagePath.concat(i, ".jpg"));
				}
				$("#carousel-hist").show();
			}

			$("#googMapUrl").attr("src", building_json.googMapUrl);

			for (var i = 0; i < 17; i++) {
				if (building_json.ungoal[i] == 0) {
					let j = i + 1;
					let obj = document.getElementById("un_" + j.toString());
					obj.setAttribute("class", "col switchoff");
				}
			}
		});

});