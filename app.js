// api url
const api_url = "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();

  show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table
function show(data) {
  console.log(data);
  let tab = data.product.title;
  let vendor = data.product.vendor;
  let price = data.product.price;
  let compare_at_price = data.product.compare_at_price;
  let description = data.product.description;
  let dresssize = data.product.options[1].values;
  let color = data.product.options[0].values;
  let img = data.product.images;

  // Setting innerHTML as  variable
  document.getElementById("showdata").innerHTML = tab;
  document.getElementById("vendor").innerHTML = vendor;
  document.getElementById("price").innerHTML = price;

  document.getElementById("compare_at_price").innerHTML =
    compare_at_price + ".00";
  document.getElementById("description").innerHTML = description;
  // dresssize.forEach(size => {
  // document.getElementsByClassName("sizeOFdress").innerHTML = size

  // console.log(size)
  // });
  document.querySelector(".sizeOFdressS").innerHTML = dresssize[0];
  document.querySelector(".sizeOFdressM").innerHTML = dresssize[1];
  document.querySelector(".sizeOFdressL").innerHTML = dresssize[2];
  document.querySelector(".sizeOFdressEL").innerHTML = dresssize[3];
  document.querySelector(".sizeOFdressXXL").innerHTML = dresssize[4];

  // color button script {sending the color from the  json url to html}

  var Yellow = document.getElementById("Yellow");
  Yellow.style.backgroundColor = color[0].Yellow;
  var Green = document.getElementById("Green");
  Green.style.backgroundColor = color[1].Green;
  var Blue = document.getElementById("Blue");
  Blue.style.backgroundColor = color[2].Blue;
  var Pink = document.getElementById("Pink");
  Pink.style.backgroundColor = color[3].Pink;
  function chagecolor() {
    Yellow.addEventListener("click", () => {
      if (Yellow && !document.querySelector(".selectCOLOR .active")) {
        Yellow.classList.add("active", "outline");
        Yellow.style.outline = "4px solid " + color[0].Yellow;
      } else {
        Yellow.classList.remove("active", "outline");
        Yellow.style.outline = "4px solid transparent";
      }
    });
    Green.addEventListener("click", () => {
      if (Green && !document.querySelector(".selectCOLOR .active")) {
        Green.classList.add("active", "outline");
        Green.style.outline = "4px solid " + color[1].Green;
      } else {
        Green.classList.remove("active", "outline");
        Green.style.outline = "4px solid transparent";
      }
    });
    Blue.addEventListener("click", () => {
      if (Blue && !document.querySelector(".selectCOLOR .active")) {
        Blue.classList.add("active", "outline");
        Blue.style.outline = "4px solid " + color[2].Blue;
      } else {
        Blue.classList.remove("active", "outline");
        Blue.style.outline = "4px solid transparent";
      }
    });
    Pink.addEventListener("click", () => {
      if (Pink && !document.querySelector(".selectCOLOR .active")) {
        Pink.classList.add("active", "outline");
        Pink.style.outline = "4px solid " + color[3].Pink;
      } else {
        Pink.classList.remove("active", "outline");
        Pink.style.outline = "4px solid transparent";
      }
    });

    // sending json img src to html*********///{ json cdn link for img is not working so i use same img in html  } 

    //  var img1 = document.querySelector(".slides .img1")
    //  img1.src = (img[0].src)
    //  var img1 = document.querySelector(".slides .img2")
    //  img1.src = (img[1].src)
    //  var img1 = document.querySelector(".slides .img3")
    //  img1.src = (img[2].src)
    //  var img1 = document.querySelector(".slides .img4")
    //  img1.src = (img[3].src)
  }
  chagecolor();
}


//*****************************image slider*************************************//

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("slide-thumbnail");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  // console.log(slideIndex);

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";

  dots[slideIndex - 1].className += " active";
}

//******************/ quantity count  button script /*******************/

let counter = 0;

function increment() {
  counter++;
}

function decrement() {
  counter--;
}

function get() {
  return counter;
}

const inc = document.getElementById("increment");
const input = document.getElementById("input");
const dec = document.getElementById("decrement");

inc.addEventListener("click", () => {
  if (input.value >= 0 ) {
    increment();
  }
  
  
  if (input.value >= 20 ) {
    decrement();
  }
  input.value = get();
});

dec.addEventListener("click", () => {
  if (input.value > 0 ) {
    decrement();
  }

  input.value = get();
});

// description hide and show 

function alert() {
  var addtocart = document.querySelector(".ADDtoCart-button .button");
  console.log(addtocart);
  var notes = document.querySelector(".notes");
  console.log(notes);
  addtocart.addEventListener("click", () => {
    if(notes && !document.querySelector(".active-notes")){
      notes.classList.add("active-notes");
    }else{
      notes.classList.remove("active-notes");
    }
    
  });
}
alert();
