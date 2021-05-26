// Initialize and add the map
function initMap() {
    // The location of Bergen
    const cafe = { lat: 60.39581788898305, lng: 5.329053670870654 };
    // The map, centered at Bergen
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 19,
      center: cafe,
      mapTypeId: "hybrid",
    });
    // The marker, positioned at Bergen
    const marker = new google.maps.Marker({
      position: cafe,
      map: map,
    });
  }