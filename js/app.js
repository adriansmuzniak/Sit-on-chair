document.addEventListener("DOMContentLoaded",function(){

var listElements = document.querySelectorAll("nav>ul>li");
var listElements2 = document.querySelectorAll("nav>ul>li>ul>li")
var blockName = document.querySelectorAll(".section2-image1 img, .section2-image2 img");
var divBlockName = document.querySelectorAll("#section2-image1 span, section2-image2 span");

var buttonBefore = document.getElementById("before");
// console.log(buttonBefore);
var buttonNext = document.getElementById("after");
// console.log(buttonNext);
var sliderList = document.querySelectorAll(".slider li")
// console.log(sliderList);
var counter = 0;

sliderList[0].classList.add("visible");

buttonBefore.addEventListener("click",function(){
  sliderList[counter].classList.remove("visible");
  counter--;
  if(counter<0){
    counter = sliderList.length-1;
  }
  sliderList[counter].classList.add("visible");
})

buttonNext.addEventListener("click",function(){
  sliderList[counter].classList.remove("visible");
  counter++;
  if(counter==sliderList.length){
    counter=0;
  }
  sliderList[counter].classList.add("visible");
})


// --------------------------------------------------------------------
for (var i=0; i<listElements.length; i++){
  listElements[i].addEventListener("mouseover",function(){
    if (this.querySelector("li")!==null){
      this.firstElementChild.style.display = "inline-block";
      this.firstElementChild.style.zIndex = "1";
    }

  });
}

  for(var i=0; i<listElements.length; i++) {
    listElements[i].addEventListener("mouseout",function(){
      if(this.querySelector("li")!==null){
        this.firstElementChild.style.display = "none";
        this.firstElementChild.style.zIndex = "0";
      }
    })
  }
// -----------------------------------------------------------
for (var i=0; i<blockName.length; i++){
  blockName[i].addEventListener("mouseover",function(){
    // this.style.display = "none";
    console.log(this.parentNode);
    this.parentNode.lastElementChild.style.display = "none";
  })
}
// --------------------------------------------------------------
for (var i=0; i<blockName.length; i++){
  blockName[i].addEventListener("mouseout",function(){
    // divBlockName.style.display = "inline-block";
    this.parentNode.lastElementChild.style.display = "inline-block";
  })
}

// _______________________________________________________________________




});
