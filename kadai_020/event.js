const textBtn = document.getElementById('btn');

const textCharacter=document.getElementById('text');

textBtn.addEventListener('click', () => {
    const textCharacter =document.createElement('text');

    textCharacter.textContent='ボタンをクリックしました';

    while (text.firstChild) {
        text.removeChild(text.firstChild);
    }

    text.appendChild(textCharacter);

})