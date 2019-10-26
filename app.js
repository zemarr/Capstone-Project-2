window.addEventListener("load", () => {
  let container = document.querySelector("#container");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const long = position.coords.longitude;
      const lat = position.coords.latitude;
      console.log(long, lat);

      const CLIENT_ID = `KTTVMAV2V02JNNDWJPLEGV3FPFDMEFKKKOMVEUHR0KQEZFFP`;
      const CLIENT_SECRET = `BSIL110ARKF51VNLU4IWOYSPAY1AJEK2PTAZO2BWJF4KFN0T`;

      // const proxy = `http://cors-anywhere.herokuapp.com/`;
      const api =
        "https://api.foursquare.com/v2/venues/search?client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET +
        "&v=20180323&limit=50&ll=" +
        lat +
        "," +
        long +
        "&radius=30000";

      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          data.response.venues.map(function(venue) {
            console.log(venue);
            const address = venue.location.formattedAddress.join(", ");
            const locationHTML = `<h2 class='venue_name'>${venue.name}</h2>
             <p class='venue_address'>${address}</p> 
             <div class='venue_image'></div>`;
            $("#list").append(locationHTML);
          });
        });
    });
  }
});
