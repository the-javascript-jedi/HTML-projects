// From Google Maps API
// var map;
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8
//     });
// }

// Initialize and Add Map
function initMap(){
    // Your Location
    var loc = { lat: 13.082680, lng: 80.270721}
    // Centered map on location
    var map = new google.maps.Map(document.querySelector('.map'), {
        // center: { lat: -34.397, lng: 150.644 },
        zoom: 14,
        center:loc
    });
    // The marker positioned at location
    var marker=new google.maps.Marker({position:loc,map:map})
}

// Navigating Smooth Scrolling
$("#navbar a,.btn").on('click',function(event){
    if(this.hash!==""){
        event.preventDefault
        var hash=this.hash;
        $('html,body').animate(
            {
                scrollTop:$(hash).offset().top-100   
            },800
        )    

    }    
})

// Sticky Menu Background
window.addEventListener("scroll",function(){
    if(window.scrollY>150){
        document.querySelector("#navbar").style.opacity=0.9;
    }
    else{
        document.querySelector("#navbar").style.opacity=1;

    }
})