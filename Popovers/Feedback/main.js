const feedbackButton = document.getElementById("feedback");
feedbackButton.addEventListener("click", toggle);
function toggle() {
  const box = document.getElementsByClassName('mains');
//   console.log(box.style);
Array.from(box).forEach((x) =>{
  if (x.style.display === "none") { 
    x.style.display = "block"; 
  } else { 
    x.style.display = "none";
}
})
}
