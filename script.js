const featuresBtn = document.getElementById('featuresBtn');
const featuresIcon = document.getElementById('featuresIcon');

const companyBtn = document.getElementById('companyBtn');
const companyIcon = document.getElementById('companyIcon');

let openDropdown = null;
let activeButton = null;
let activeIcon = null;

const featuresData = [
  {text: "Todo List", icon:"images/icon-todo.svg"},
  {text: "Calendar", icon:"images/icon-calendar.svg"},
  {text: "Reminders", icon:"images/icon-reminders.svg"},
  {text: "Planning", icon:"images/icon-planning.svg"}
];

const companyData = [
  {text: "History"},
  {text: "Our Team"},
  {text: "Blog"}
];

function createDropdown(items, withIcons = false) {
  const dropdown = document.createElement('div');

  dropdown.className =
    "absolute top-12 flex flex-col gap-3 p-5 rounded-xl " +
    "w-max " +
    "shadow-[0_10px_40px_rgba(0,0,0,0.15)] " +
    "bg-white text-[#6a6a6a]";

  items.forEach(item => {
    const link = document.createElement("a");
    link.href = "#";
    link.className = "flex items-center gap-3 whitespace-nowrap";

    if (withIcons) {
      const img = document.createElement('img');
      img.src = item.icon;
      img.className = "shrink-0";
      link.appendChild(img);
    }

    link.append(item.text);
    dropdown.appendChild(link);
  });

  return dropdown;
}

function closeDropdown() {

  if (openDropdown) {
    openDropdown.remove();
    openDropdown = null;
  }

  if (activeButton) {
    activeButton.classList.remove("text-black");
    activeButton.classList.add("text-[#6a6a6a]");
  }

  if (activeIcon) {
    activeIcon.src = "images/icon-arrow-down.svg";
  }

  activeButton = null;
  activeIcon = null;
}

document.addEventListener("click", () => { // Fecha o dropdown clicando em qualquer parte da tela.
  closeDropdown();
});


featuresBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  if (activeButton === featuresBtn) {
    closeDropdown();
    return;
  }

  closeDropdown();

  const dropdown = createDropdown(featuresData, true);

  featuresBtn.style.position = "relative";
  featuresBtn.appendChild(dropdown);

  dropdown.classList.add("top-8", "left-0");

  featuresBtn.classList.remove("text-[#6a6a6a]");
  featuresBtn.classList.add("text-black");

  featuresIcon.src = "images/icon-arrow-up.svg";

  openDropdown = dropdown;
  activeButton = featuresBtn;
  activeIcon = featuresIcon;
});

companyBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  if (activeButton === companyBtn) {
    closeDropdown();
    return;
  }

  closeDropdown();

  const dropdown = createDropdown(companyData);

  companyBtn.style.position = "relative";
  companyBtn.appendChild(dropdown);

  dropdown.classList.add("top-8", "left-0");

  companyBtn.classList.remove("text-[#6a6a6a]");
  companyBtn.classList.add("text-black");

  companyIcon.src = "images/icon-arrow-up.svg";

  openDropdown = dropdown;
  activeButton = companyBtn;
  activeIcon = companyIcon;
});