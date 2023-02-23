const toggleButon = documentGetElementByClass("toggle-button")[0]
const navbar = documentGetElementByClass("navbar-links")[0]

toggleButon.addEventListener('click', ()=> {
    navbar.classlist.toggle('active')
})