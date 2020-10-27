// map
function initMap(){
  // map options
    var options = {
    zoom:3,
    center:{
      lat:37.0902, lng:-95.7129
    }
}
  // new map
    var map = new 
    google.maps.Map(document.getElementById('map'), options);

    // listen for click on map
    google.maps.event.addListener(map, 'click', function(event){
      // add marker
      addMarker({coords:event.latLng});
    });

    // array of markers

    let markers = [
      {
        coords:{lat:33.7490, lng:-84.3880},
        // iconImage:'';
        content:'<h1>Atlanta, GA</h1>'
      },

    ];

    // loop through markers 
      for(var i = 0; i < markers.length; i++){
        addMarker(markers[i]);
      }
    
    // add marker function
    function addMarker(props){
            let marker = new google.maps.Marker({
      position:props.coords,
      map:map,
      // personalized icon
      // icon:props.iconImage
    });

      // check for icon image
      if(props.iconImage){
        // set icon image
        marker.setIcon(props.iconImage);

      }

      if(props.content){

        var infoWindow = new google.maps.infoWindow({

          content:props.content

        });

      };


    };

      marker.addListener('click', function(){

      infoWindow.open(map, marker);

    });
}
// end map

// js for map add form
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
  // end js for map add form