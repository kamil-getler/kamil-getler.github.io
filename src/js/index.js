import '../scss/main.scss';




const button = document.querySelector("img");

button.addEventListener('click',() => {
  document.querySelector("img").classList.toggle("kropla__aim");

  console.log('simano');
});
