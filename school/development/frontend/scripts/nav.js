// Кнопка выбора языка
const LanBtn = document.querySelector('.language-btn');
const LanDropdown = document.querySelector('.language-dropdown');
LanBtn.addEventListener('click', () => {
    LanDropdown.classList.toggle('active');
});

// Кнопка выбора темы
const ThemeBtn = document.querySelector('.theme-btn');
const ThemeDropdown = document.querySelector('.theme-dropdown');
ThemeBtn.addEventListener('click', () => {
    ThemeDropdown.classList.toggle('active');
})
// Закрытие меню при клике вне его области 
document.addEventListener('click', (e) => {
    if (!LanDropdown.contains(e.target) && !LanBtn.contains(e.target)) {
        LanDropdown.classList.remove('active');
    }
    if (!ThemeDropdown.contains(e.target) && !ThemeBtn.contains(e.target)) {
        ThemeDropdown.classList.remove('active');
    }
});

// Выбор темы
const ThemeDark = document.querySelector('.dark')
const navbar = document.querySelector('.navbar')
const centerNavList = document.querySelectorAll('.center-nav-list a')
ThemeDark.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    navbar.classList.toggle('dark');
    centerNavList.forEach(item => {
        item.classList.toggle('dark');
    })
    document.querySelector('.right-nav button').classList.toggle('dark');
})
