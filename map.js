
 window.initMap = function initMap(){
    var myLatLng = {lat: 56.5110, lng: 3.5156};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 2,
      center: myLatLng
    });
    
    for(var i=0; i <battles.length; i++){
       new google.maps.Marker({
        position: battles[i].position,
        map: map,
        animation: google.maps.Animation.DROP,
        title: battles[i].title
      }).addListener('click', toggleBounce);
    }
    
     function toggleBounce() {
      var marker = this;
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
  }
      