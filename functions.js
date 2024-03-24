tileSize = 1;
map.on('click', function (e) {
    var coord = e.containerPoint;
    console.log(coord)
    var lat = Math.floor((coord.lat / tileSize) + 1);
    var lng = Math.floor(coord.lng / tileSize);
    console.log('Tile Location: ' + lat + ', ' + lng);
    console.log(
    'Map Location: ' + Math.floor(lat * tileSize) + ', ' + Math.floor(lng * tileSize)
    );
});
function disableItems() {
var elements = document.getElementsByClassName('itemIcon');
for (var i = 0, length = elements.length; i < length; i++) {
    elements[i].classList.toggle('hidden');
}
}
function disableHiddenItems() {
var elements = document.getElementsByClassName('hitemIcon');
for (var i = 0, length = elements.length; i < length; i++) {
    elements[i].classList.toggle('hidden');
}
}
function disableBerryItems() {
var elements = document.getElementsByClassName('berryIcon');
for (var i = 0, length = elements.length; i < length; i++) {
    elements[i].classList.toggle('hidden');
}
}
function toggleGrid() {
if (map.hasLayer(Grid)) {
    map.removeLayer(Grid);
    console.log('Grid removed');
} else {
    map.addLayer(Grid);
    console.log('Grid added');
}
}
var content = document.getElementById('controls');
var swch = 0;
function changeMenu() {
if (swch == 0) {
    content.style.display = 'flex';
    swch = 1;
} else {
    content.style.display = '';
    swch = 0;
}
}
  