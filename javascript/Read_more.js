
const parentContainer = document.querySelector('.one');
parentContainer.addEventListener('click', event=>{
    const current = event.target;
    const isReadMoreBtn = current.className.Includes('read_more_btn');
    if(!isReadMoreBtn) return;
    const currentText =event.target.parentNode.querySelector('.read_more_text');
    currentText.classList.toggle('read_more_text-show');
    current.textContent = current.textContent.includes('Read More') ?
    "Read Less...": "Read More...";
})
