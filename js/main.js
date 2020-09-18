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

document.addEventListener("DOMContentLoaded", function () {

  var collapse = document.querySelectorAll(".collapsible");

  for (var i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function () {
      this.classList.toggle("active");
      // document.querySelectorAll('.section').forEach(function (otherDiv) {
      //   otherDiv.style.display = 'none'
      // })

      var section = this.nextElementSibling;
      if (section.style.display === "block") {
        section.style.display = "none";
      } else {
        section.style.display = "block";
      }

    });
  }
})