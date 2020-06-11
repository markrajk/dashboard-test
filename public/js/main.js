var sidenavMenu = document.querySelector('.sidebar-menu');
var sidenavMenuToggle = document.querySelector('.sidebar-menu-toggle');
var sidenavMenuToggleIcon = document.querySelector('.sidebar-menu-toggle i');

sidenavMenuToggle.addEventListener('click', function () {
  sidenavMenu.classList.toggle('sidebar-menu-close-anim');
  sidenavMenuToggleIcon.classList.toggle('sidebar-menu-close-icon-rotate');
});

function closeMenuOnSmall() {
  if (window.innerWidth < 1320) {
    sidenavMenu.classList.add('sidebar-menu-close-anim');
    sidenavMenuToggleIcon.classList.add('sidebar-menu-close-icon-rotate');
  } else {
    sidenavMenu.classList.remove('sidebar-menu-close-anim');
    sidenavMenuToggleIcon.classList.remove('sidebar-menu-close-icon-rotate');
  }
}

var tableDropdowTrigger = document.querySelector(
  '.table-dropdown-custom-trigger'
);
//TESTING NEW DROPDOWN
// tableDropdowTrigger.addEventListener('focus', function () {
//   var el = document.createElement('ul');
//   el.innerHTML = `
//   <li class="table-dropdown-custom-list-item">
//     <a href="#" class="table-dropdown-custom-list-item-link">Open profile</a>
//   </li>

//   <li class="table-dropdown-custom-list-item">
//       <a href="#" class="table-dropdown-custom-list-item-link">Delete member</a>
//   </li>
//   `;
//   el.classList.add('test');
//   document.body.appendChild(el);
// });

window.addEventListener('resize', closeMenuOnSmall);

closeMenuOnSmall();
