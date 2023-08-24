const footer = document.querySelector('.addYear');
const text = `© Matheus Luiz Iost ${getYear()}. MIT License.`;
const p = document.createElement('p');
p.textContent = text;
footer.appendChild(p)


function getYear(){
   let date = new Date().getUTCFullYear();
    return date;
}

