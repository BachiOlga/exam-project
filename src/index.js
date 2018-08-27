import $ from 'jquery';
// slider
const slides = document.querySelectorAll('#slides .slide');
console.log(slides);
let currentSlide = 0;
function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}
const slideInterval = setInterval(nextSlide, 4000);


//   /slider

// footer


const init = () => {
    console.log('init')
    let mapOptions = {
        zoom: 11,
        center: new google.maps.LatLng(50.4760069, 30.4075262), // New York
        styles: [{
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "on"
            }]
        }]
    };
    let mapElement = document.getElementById('map');
    let map = new google.maps.Map(mapElement, mapOptions);
    let marker = new google.maps.Marker({
        position: new google.maps.LatLng(50.4760069, 30.4075262),
        map: map,
        title: 'Snazzy!'
    });
};
google.maps.event.addDomListener(window, 'load', init);
// /footer