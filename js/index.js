let date = new Date().getUTCFullYear();
const footer = document.querySelector('.addYear');
const text = `© Matheus Luiz Iost ${date}. MIT License.`;
const p = document.createElement('p');
p.textContent = text;
footer.appendChild(p)



