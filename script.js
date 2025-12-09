const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('menuList');

toggle && toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  if (!expanded) {
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
    menu.style.position = 'absolute';
    menu.style.right = '30px';
    menu.style.top = '60px';
    menu.style.background = 'rgba(246,239,230,0.98)';
    menu.style.padding = '12px';
    menu.style.boxShadow = '0 8px 18px rgba(0,0,0,0.08)';
  } else {
    menu.style.display = '';
    menu.style.position = '';
    menu.style.top = '';
    menu.style.right = '';
    menu.style.background = '';
    menu.style.padding = '';
    menu.style.boxShadow = '';
  }
});


document.addEventListener("DOMContentLoaded", () => {

  const infoLink = document.querySelector('.menu-info');
  const infoSection = document.getElementById('info');

  infoLink.addEventListener('click', (e) => {
    e.preventDefault();

    const isVisible = infoSection.style.display === "block";

    if (isVisible) {
      infoSection.style.display = "none";
      infoLink.classList.remove("active");
    } else {
      infoSection.style.display = "block";
      infoLink.classList.add("active");
      infoSection.scrollIntoView({ behavior: "smooth" });
    }
  });

});

