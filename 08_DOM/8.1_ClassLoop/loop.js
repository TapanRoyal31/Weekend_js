let element = document.querySelectorAll(".par");

element.forEach((ele) => {
  if (ele.innerHTML % 2 == 0) {
    ele.style.background = "red";
    ele.style.padding = "20px";
  }
  console.log(ele);
});
