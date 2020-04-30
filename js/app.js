const list = document.querySelector('#main-section .list');
console.log(list);

list.addEventListener('click', function(e){
 
  if(e.target.classList.contains("del")){
    const li = e.target.parentElement;
    list.removeChild(li);
  }
  
});

const form = document.forms['formz'];

// console.log(f);

form.addEventListener('submit', function(e){
  e.preventDefault();
  const value = form.querySelector('input[type = "text"]').value;
  // console.log(value);
  const icon = document.querySelector('input');
  const content = document.querySelector('p');
  const del = document.querySelector('i');
  const li = document.querySelector('li');

  //append child

  li.appendChild(icon);
  li.appendChild(content);
  li.appendChild(del)

  //append it under the list
  
  list.appendChild(li);

  //Adding value

  content.textContent = value;

  del.classList.add("fas fa-trash-alt item item3 del");
  content.classList.add("item item1 radio");
  li.classList.add("items");
  icon.classList.add(" item item1 radio");



});






