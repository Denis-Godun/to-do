//находим кнопку и поле ввода, записываем их в переменные
const btn = document.querySelector("#btn");
const input = document.querySelector("input");

//добавляем функцию keydown для добавления нового элемента по нажатию клавиши
input.addEventListener("keydown", function (event) {
  if (event.code == "Enter") {
    addItem(input.value);
    input.value = "";
  }
});

//функция onclick для добавления элемента по клику на button
btn.onclick = () => {
  addItem(input.value);
  input.value = "";
};

//функция создания и добавления нового элемента
let addItem = function (input) {
    //создаём див который будем добавлять
  const item = document.createElement("div");
  //создаём див с иконками
  const div = document.createElement("div");
  //создаём иконки
  const checkIcon = document.createElement("i");
  const trashIcon = document.createElement("i");
  //создаём параграф в который будет помещено текстовое содержимое
  const paragraph = document.createElement("p");

  //добавляем нашему элементу класс со стилями
  item.className = "item";
  //добавляем параграфу текстовое содержимое из поля ввода
  paragraph.textContent = input;

  //добавляем иконку галочки
  checkIcon.className = "fa-regular fa-circle-check";
  //по клику на галочку она становится зеленой
  checkIcon.onclick = () => {
    checkIcon.style.color = "#00ff00";
  };
  //добавляем галочку в див с иконками
  div.appendChild(checkIcon);

  //добавляем иконку корзины
  trashIcon.className = "fa-solid fa-trash";
  //по клику на иконку пропадает созданный элемент
  trashIcon.onclick = () => {
    item.remove();
  };
 //добавляем корзину в див с иконками
  div.appendChild(trashIcon);
  //добавим диву класс, чтобы немного поменять расположение иконок
  div.className = "icons";
  
  //добавляем к нашему айтему текст и иконки
  item.appendChild(paragraph);
  item.appendChild(div);

  //добавляем айтем в HTML
  document.querySelector("#to_do_list").append(item);
};
