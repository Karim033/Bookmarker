let bookMarkContainer = [];
if (localStorage.getItem('sites') != null) {
    bookMarkContainer = JSON.parse(localStorage.getItem('sites'));
    dispaly();
}
else {
    bookMarkContainer = [];
}
let siteNameinput = document.getElementById('siteName');
let siteUrlinput = document.getElementById('siteURL');

function add() {
    if (validate() == true) {
        let sites = {
            name: siteNameinput.value,
            url: siteUrlinput.value
        }

        bookMarkContainer.push(sites);
        localStorage.setItem('sites', JSON.stringify(bookMarkContainer));
        clearform();
        dispaly();

    }
    else {
        document.getElementById('val1').classList.replace('d-none', 'd-block');
        document.getElementById('val2').classList.replace('d-none', 'd-block');
    }
}
function clearform() {
    siteNameinput.value = "";
    siteUrlinput.value = "";
}

function dispaly() {

    let cartoona = ``;
    for (let i = 0; i < bookMarkContainer.length; i++) {
        cartoona += ` <h2>${bookMarkContainer[i].name}</h2>
        <a class="btn btn-outline-primary " href="${bookMarkContainer[i].url}" target="_blank">Visit</a>
        <button onclick="del(${i})" class="btn btn-danger">Delete</button>`
    }
    document.getElementById('web').innerHTML = cartoona;
}

function del(index) {
    bookMarkContainer.splice(index, 1);
    localStorage.setItem('sites', JSON.stringify(bookMarkContainer));
    dispaly();
}
function validate() {
    let regx = /\w/;
    if (regx.test(siteNameinput.value) == true) {
        return true;
    }
    else if (regx.test(siteUrlinput.value) == true) {
        return true;
    }   
    else {
        return false;
    }
}
