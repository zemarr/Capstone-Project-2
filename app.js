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
        "&radius=50000";

      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          data.response.venues.map(function (venue) {
            console.log(venue);
            const address = venue.location.formattedAddress.join(", ");
            console.log("The address is", address)
            const locationHTML = `<div class='spot'><div class='venue_image'></div><div class='venue_name'><h2>${venue.name}</h2></div>
             <div class='venue_address'><p><b>Location:</b> ${address}</p></div> 
             </div>`;
            $('#list').append(locationHTML);
          });
        });
    });
  }
});
