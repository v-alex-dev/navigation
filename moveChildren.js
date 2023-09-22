function moveChildren() {
  const selectUl = document.querySelector('ol');
  let olLastChildren = selectUl.lastElementChild;
  let olFirstChildren = selectUl.firstElementChild;
  
  selectUl.insertBefore(olLastChildren, olFirstChildren)
}

export {moveChildren}