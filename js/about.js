var original = "../images/heart.png";

// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


(function () {
  var images = {
   
    "1": "../images/about/sculpting.png",
    "2": "../images/about/jewelry_making.png",
    "3": "../images/about/crochet.png"
  };
  var heart = document.getElementById("empty-heart");
  var arr = document.getElementsByClassName('fill');
  // console.log(arr)
  for (var i = 0; i < arr.length; i++) {
    arr[i].onmouseover = function (e) {
      var a = e.target;
      var imgId = a.getAttribute('data-image-id');
      var imgSrc = images[imgId];
      heart.src = imgSrc;
      heart.setAttribute("style", "width: 75%; height: auto;");

    } 
    arr[i].onmouseout = function (){
    heart.src = "../images/about/heart-dark.png";
    }
   
  }

})
();
