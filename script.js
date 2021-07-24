const Icons = {
  DARK: 'fa-moon',
  LIGHT: 'fa-sun'
}
const modeNames = {
  DARK: 'dark',
  LIGHT: 'light'
}

const images = document.querySelectorAll('.image');
const nav = document.getElementById('nav');
const toggleElement = document.getElementById('toggle-element');
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const textBox = document.getElementById('text-box');

const capitalizeString = string => string.charAt(0).toUpperCase() + string.slice(1);

const changeElementsMode = (modeType) => {
  const isLight = modeType === modeNames.LIGHT;
  const text = capitalizeString(modeType);
  nav.style.backgroundColor = (isLight) ? 'rgb(255 255 255 /50%)' : 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = (isLight) ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 /50%)';
  toggleElement.children[0].textContent = `${text} Mode`;
  images.forEach(img => img.src = (img.src.match('light.svg')) ? img.src.replace('light.svg', 'dark.svg') : img.src.replace('dark.svg', 'light.svg'));
  if (isLight) {
    toggleElement.children[1].classList.replace(Icons.DARK, Icons.LIGHT);
  } else {
    toggleElement.children[1].classList.replace(Icons.LIGHT, Icons.DARK);
  }
}

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', modeNames.DARK);
    localStorage.setItem('theme', modeNames.DARK);
    changeElementsMode(modeNames.DARK);
  } else {
    document.documentElement.setAttribute('data-theme', modeNames.LIGHT);
    localStorage.setItem('theme', modeNames.LIGHT);
    changeElementsMode(modeNames.LIGHT);
  }
}

toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    changeElementsMode(currentTheme)
  }
}
