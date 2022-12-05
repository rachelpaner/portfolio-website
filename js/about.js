var original = "../images/heart.png";


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
