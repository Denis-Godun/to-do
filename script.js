const btn = document.querySelector("#btn");
const input = document.querySelector("input");
const item = document.querySelector("#to_do_list");
btn.onclick = function () {
  addItem(input.value);
  input.value = "";
};
let addItem = function (input) {
  const item = document.createElement("div");
  const div = document.createElement("div");
  const checkIcon = document.createElement("i");
  const trashIcon = document.createElement("i");
  const paragraph = document.createElement("p");

  item.className = "item";
  paragraph.textContent = input;

  checkIcon.className = "fa-regular fa-circle-check";
  checkIcon.onclick = () => {
checkIcon.style.color = "#00ff00";
  };
  div.appendChild(checkIcon);
   
  trashIcon.className = "fa-solid fa-trash";
  trashIcon.onclick = () => {
    item.remove();
  };

  div.className = "icons";
  div.appendChild(trashIcon);

  item.appendChild(paragraph);
  item.appendChild(div);

  document.querySelector('#to_do_list').append(item);
};
