const request = {
    location: new google.maps.LatLng(51.5287352, -0.3817841),
    radius: 5000,
    type: ['restaurant']
};

const results = [];
const places = document.getElementById('places');
const service = new google.maps.places.PlacesService(places);

const callback = (response, status, pagination) => {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        results.push(...response);
    }

    if (pagination.hasNextPage) {
        setTimeout(() => pagination.nextPage(), 2000);
    } else {
        displayResults();
    }
}

const displayResults = () => {
    results.filter(result => result.rating)
        .sort((a, b) => a.rating > b.rating ? -1 : 1)
        .forEach(result => {
            places.innerHTML += `<li>${result.name} - ${result.rating}</li>`;
        });
}

service.nearbySearch(request, callback);