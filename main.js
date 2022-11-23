import './style.css'
import { dashboardNavbar, sideBar, table } from './template'


// Function for dropdown
const activateDashboardDropdowns = () => {
  document.querySelectorAll(".dashboard-dropdown-button").forEach(item => {
    item.addEventListener("click", (e) => {
      const target = e.target;
      const parent = target.closest(".dashboard-dropdown");
      const detail = parent.querySelector(".dashboard-dropdown-detail");
      detail.classList.toggle("hide");
    })
  })
}

// Function for sidebar
const activateSidebar = () => {
  document.querySelectorAll(".mobile-sidebar-button").forEach(item => {
    item.addEventListener("click", (e) => {
      const sidebar = document.querySelector(".dashboard-sidebar");
      sidebar.classList.toggle("show");
    })
  })
  document.querySelectorAll(".sidebar-close-button").forEach(item => {
    item.addEventListener("click", (e) => {
      const sidebar = document.querySelector(".dashboard-sidebar");
      sidebar.classList.toggle("show");
    })
  })
}

const convertStringToDOM = (string) => {
  var wrapper= document.createElement('div');
  wrapper.innerHTML= string;
  return wrapper.firstElementChild;
}


document.querySelector("#dashboard-navbar").replaceWith(convertStringToDOM(dashboardNavbar));
document.querySelector("#table-component").replaceWith(convertStringToDOM(table));
document.querySelector("#dashboard-sidebar").replaceWith(convertStringToDOM(sideBar));



// Run Dropdown func
activateDashboardDropdowns();
// Run Sidebar func
activateSidebar();
