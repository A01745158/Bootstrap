let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  /* se repite infinitamente y que tan rápido lo dice el delay*/
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  /* texto a mostrar */
  .typeString('Denuncia Segura')
  .pauseFor(200)
  .deleteChars(10)
  .start();