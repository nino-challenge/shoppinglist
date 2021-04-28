'use strict';

const textInput = document.querySelector("#text-input");
const shoppingList = document.querySelector("#shopping-list");

textInput.addEventListener("keydown", e => {
  const text = textInput.value.trim();

    if( text === "" || e.key !== "Enter") {
      return;
    };

    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.classList.add("list-item");
    span.textContent = text;
    span.classList.add("shopping-text");

    button.textContent = "OK";
    button.type = "button";
    button.classList.add("delete-button");
    button.addEventListener("click", e=> {
      shoppingList.removeChild(e.target.closest("li")); //ボタンを押した要素を削除
    });

    li.appendChild(span);
    li.appendChild(button);
    shoppingList.appendChild(li);

    textInput.value = "";
});

