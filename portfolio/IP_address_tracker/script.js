const apiKey = "at_1JBXettMUE6idA1Qq3wOHsl5ZI8bX";

//let map;

function getDetails(){
    reset()
    let ip = document.getElementById("search-input").value;
    const api_key = "at_1JBXettMUE6idA1Qq3wOHsl5ZI8bX";
    let a = fetch("https://geo.ipify.org/api/v1?apiKey=" + api_key + "&ipAddress=" + ip)
        .then(res => res.json())
        .then(function(res){
            console.log(res);
            document.getElementById("ip_address").textContent += res.ip;
            document.getElementById("location").textContent += res.location.city + ", " + res.location.region;
            document.getElementById("postal_code").textContent += res.location.postalCode;
            document.getElementById("timezone").textContent += "UTC " + res.location.timezone;
            document.getElementById("isp").textContent += res.isp;
            document.getElementById("name").textContent += res.as.name;
            let lng = res.location.lng;
            let lat = res.location.lat;
            initMap(lng, lat, 12);
        })
}

function reset(){
    document.getElementById("ip_address").textContent = "";
    document.getElementById("location").textContent = ""; 
    document.getElementById("timezone").textContent = ""; 
    document.getElementById("postal_code").textContent = "";
    document.getElementById("isp").textContent = "";
    document.getElementById("name").textContent = "";
}

function initMap(lng, lat, zoom){ 
    mapboxgl.accessToken = 'pk.eyJ1Ijoicmhlc3VzcCIsImEiOiJja3NuZHdkMmswbHB1MnZsZTI0ODJibzJ1In0.Tvc7OjM9OMCVEYwjslCuLg';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat], // starting position [lng, lat]
        zoom: zoom // starting zoom
    });
}

initMap(4.8345182169917456, 45.760688667648225, 1);


// 91.169.3.82
// 192.212.174.101

//pk.eyJ1Ijoicmhlc3VzcCIsImEiOiJja3NuZHdkMmswbHB1MnZsZTI0ODJibzJ1In0.Tvc7OjM9OMCVEYwjslCuLg