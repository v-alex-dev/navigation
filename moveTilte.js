function moveTilte() {
  const title = document.querySelectorAll('h2');
  const section = document.querySelectorAll('section');
  const div = section[2].children;

  section[1].insertBefore(title[2], title[1]);
  div[0].insertBefore(title[1], div[0].lastElementChild);
}

export {moveTilte};