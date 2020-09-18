// document.addEventListener("DOMContentLoaded", function () {
// document.querySelectorAll(".section").forEach(function (div) {
//     div.addEventListener("click", function () {
//         document.querySelectorAll(".section").forEach(function (otherDiv) {
//             // otherDiv.style.whiteSpace = "nowrap";
//             otherDiv.style.overflow = "hidden";
//             otherDiv.style.textOverflow = "ellipsis";
//             otherDiv.style.fontSize = "10pt";
//             otherDiv.style.color = "green";
//             // otherDiv.style.background = "white";
//         });
//         this.style.whiteSpace = "normal";
//         this.style.overflow = "visible";
//         this.style.textOverflow = "string";
//         this.style.fontSize = "18pt";
//         this.style.color = "goldenrod";
//         // this.style.background = "rgb(123, 149, 117)";
//     });
// });
// });

document.addEventListener("DOMContentLoaded", function(){
    
    var coll = document.querySelectorAll(".collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var section = this.nextElementSibling;
        if (section.style.display === "block") {
          section.style.display = "none";
        } else {
          section.style.display = "block";
        }
      });
    }
})

