// target the input element
const input = document.getElementById("action__input_1");
// target the dark mode switch element
const darkModeToggle = document.getElementById("dark__mode__toggle");
const checkBox = document.querySelector(".table__body");

// click handler
const toggleMenu = (event) => {
  // target the menu element
  const menu = document.getElementById("action__menu_1");
  menu.classList.toggle("hidden");
};

// dark mode toggle handler
const darkModeToggleHandler = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};
// add the checked class to the row
const selectTable = (event) => {
  // 往上找到最近符合條件的 element
  const parent = event.target.closest('.table__row')
  parent.classList.toggle("checked")
};


// bind the event
input.addEventListener("click", toggleMenu);
darkModeToggle.addEventListener("change", darkModeToggleHandler);
checkBox.addEventListener("change", selectTable);
