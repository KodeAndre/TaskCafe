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
  

  function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("What's your name must be filled out");
      return false;
    }
  }

//Get the button:
mybutton = document.getElementById("myBtn");

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}