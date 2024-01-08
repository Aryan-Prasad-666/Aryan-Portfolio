let loader=document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display="none";
});


const sidebar = document.querySelector('.sidebar');
const ham = document.getElementById("ham");
const cls = document.getElementById("cls");

ham.addEventListener("click", showSidebar);
cls.addEventListener("click", closeSidebar);

function showSidebar() {
    sidebar.style.display = 'flex';
    setTimeout(() => {
        sidebar.classList.add('show');
    }, 50); // Add a small delay to ensure display change takes effect before adding 'show' class
}

function closeSidebar() {
    sidebar.classList.remove('show');
}
