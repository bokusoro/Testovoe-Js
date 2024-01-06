let search = document.querySelector(`.input`);
let button = document.querySelector(`#submit`);
let img = document.querySelector(`.error_img`);
button.addEventListener (`click`, function() {
  img.innerHTML = "";
  let x = search.value;
  if (typeof x == `number`) {
    console.log(1) ;
    img.innerHTML += `<img  class="error_img" src="https://http.cat/images/${x}.jpg" alt="Error 404">`;
  }
})
  
