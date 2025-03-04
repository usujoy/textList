const displayContent = (contents, display) => {
  display.innerHTML = "";
  for (const content of contents) {
    display.innerHTML += content;
  }
};

const addAndDisplay = (contents, input, display) => {
  contents.push(`<li>${input.value}</li>`);

  document.querySelector(".display").classList.remove("hidden");

  displayContent(contents, display);

  input.value = "";

  input.focus();
};

const handleRemoveAllButton = (rem, contents, display) => {
  rem.classList.add("clicked");

  while (contents.length > 0) {
    contents.pop();
  }

  displayContent(contents, display);
  document.querySelector(".display").classList.add("hidden");

  setTimeout(() => {
    rem.classList.remove("clicked");
  }, 100);
};

const handleRemove = (remove, contents, input, display) => {
  remove.classList.add("clicked");

  contents.pop();

  setTimeout(() => {
    remove.classList.remove("clicked");
  }, 100);

  if (contents.length === 0) {
    document.querySelector(".display").classList.add("hidden");
  }

  displayContent(contents, display);

  input.focus();
};

const addButton = (add, contents, input, display) => {
  add.classList.add("clicked");

  setTimeout(() => {
    add.classList.remove("clicked");
  }, 100);

  if (input.value.trim() === "") {
    return;
  }

  addAndDisplay(contents, input, display);
};

const addByEnter = (add, contents, input, display) => {
  if (input.value.trim() === "") {
    return;
  }
  addAndDisplay(contents, input, display);
};

const listBox = () => {
  const add = document.getElementById("addButton");
  const contents = new Array();``
  const input = document.querySelector("input");
  const display = document.querySelector(".display ol");

  add.onclick = () => addButton(add, contents, input, display);

  document.onkeydown = () => {
    if (event.key === "Enter") {
      addByEnter(add, contents, input, display);
    }
  };

  const remove = document.getElementById("remove");

  remove.onclick = () => handleRemove(remove, contents, input, display);

  const removeAllButton = document.getElementById("removeAllButton");

  removeAllButton.onclick = () =>
    handleRemoveAllButton(removeAllButton, contents, display);
};

window.onload = listBox;
