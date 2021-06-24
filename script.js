var imageURL;
var slide0;
var slide1;
var slide2;

window.onload = function () {
  slide0 = document.getElementById("slide0");
  slide1 = document.getElementById("slide1");
  slide2 = document.getElementById("slide2");

  $('#carousel1').bind('slide.bs.carousel', function (e) {
    if (slide0.classList.contains("active")) {
      //1
      document.getElementById("map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79397.18895750113!2d-80.57033760983911!3d28.422480204728693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1b96b0ea0771d68a!2sRocket%20Launch%20View%20Point!5e0!3m2!1ses!2ses!4v1620399618898!5m2!1ses!2ses";
    } else if (slide1.classList.contains("active")) {
      //2
      document.getElementById("map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24226950.512083195!2d0!3d-68.24630693894959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4b9967b3390754b%3A0x6e52be1f740f2075!2sAnt%C3%A1rtida!5e0!3m2!1ses!2ses!4v1620399676272!5m2!1ses!2ses";
    } else if (slide2.classList.contains("active")) {
      //0
      document.getElementById("map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.5670865726233!2d-95.09152238439593!3d29.55809918206182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86409da671292593%3A0xf684f098a7237a30!2sNASA%20Mission%20Control%20Center!5e0!3m2!1ses!2ses!4v1620309493545!5m2!1ses!2ses";
    }
  });
};

function moonClick() {
  document.getElementById('dropdownText').firstChild.data = "Moon";
  document.getElementById('priceText').innerHTML = "Total: 400$";
}

function marsClick() {
  document.getElementById('dropdownText').firstChild.data = "Mars";
  document.getElementById('priceText').innerHTML = "Total: 1000$";
}

function bunkerClick() {
  document.getElementById('dropdownText').firstChild.data = "Bunker";
  document.getElementById('priceText').innerHTML = "Total: 50$";
}

function ship1Click() {
  document.getElementById('dropdown1Text').firstChild.data = "Ship 1";
  document.getElementById('priceText').innerHTML = "Total: 800$";
}

function ship2Click() {
  document.getElementById('dropdown1Text').firstChild.data = "Ship 2";
  document.getElementById('priceText').innerHTML = "Total: 8700$";
}

function ship3Click() {
  document.getElementById('dropdown1Text').firstChild.data = "Ship 3";
  document.getElementById('priceText').innerHTML = "Total: 1100$";
}