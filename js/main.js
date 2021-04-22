function initMap() {
	/*Setting map*/
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 11,
		center: {lat: 33.770050, lng: -118.193739},
		styles: [
		/*Map is colored with - snazzy maps - https://snazzymaps.com/ */
			{
				"featureType": "all",
				"elementType": "labels.icon",
				"stylers": [
					{
						"saturation": "0"
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#444444"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "all",
				"stylers": [
					{
						"color": "#f2f2f2"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 45
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "all",
				"stylers": [
					{
						"color": "#c5c5c5"
					},
					{
						"visibility": "on"
					}
				]
			}
		]
	});
	/*Setting marker on the map*/
	var marker = new google.maps.Marker({
			position: {lat: 33.770050, lng: -118.193739},
			title:"Visit Us",
			icon: 'img/marker.png'
	});
	marker.setMap(map);

}