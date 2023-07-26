const darkMode=document.getElementById("dark-mode");
const app=document.getElementById("dash");


darkMode.addEventListener("click",()=>{
    darkMode.setAttribute("disabled","true");
    app.classList.toggle("dark");
    darkMode.classList.toggle("dark");
    darkMode.removeAttribute("disabled");
})