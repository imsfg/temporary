const noBtn = document.querySelector('.temp');
const wrapper = document.querySelector('.main');
const question = document.querySelector('.frzi');
// const yesBtn = document.querySelector('.yes-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
noBtn.addEventListener('mouseover', () => {
    console.log("yes");
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
noBtn.addEventListener('click', () => {
    console.log("yes");
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});