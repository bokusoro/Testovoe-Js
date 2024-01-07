let search = document.querySelector(`.input`);
let button = document.querySelector(`#submit`);
let img = document.querySelector(`.error_img`);
button.addEventListener(`click`, function () {
  let x = Number(search.value);
  if (typeof x == "number") {
    console.log(search.value);
    let str = `https://http.cat/images/${x}.jpg`;
    img.setAttribute("src", str);
    console.log(img.innerHTML);
  }
});
