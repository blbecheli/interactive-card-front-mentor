const cardName = document.querySelector('#name');
const cardNumber = document.querySelector('#card');
const cardYy = document.querySelector('#yy');
const cardMm = document.querySelector('#mm');
let mm
const cardCvc = document.querySelector('#cvc');
const btnConfirm = document.querySelector('.confirm')
const confirm = document.querySelector('.confirm')
let cN = 0;
let cNu = 0;
let eM = 0;
let eY = 0;
let cv = 0;


cardName.addEventListener('focusout', (evento) => {
    const name = document.querySelector('.card__name')
    const mis__name = document.querySelector('.mis__name')
    if (cardName.value.length === 0) {
        mis__name.classList.remove('ative')
        cN = 0           
    } else {
        mis__name.classList.add('ative')
        name.innerHTML = evento.target.value
        cN = 1
    }
})

cardNumber.addEventListener('focusout', (evento) => {
    const number = document.querySelector('.card__number')
    const mis__number = document.querySelector(".mis__number");
    if (cardNumber.value.length != 12) {
        mis__number.classList.remove('ative');
        cNu = 0;
    } else {
        number.innerHTML = evento.target.value.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");
        mis__number.classList.add('ative');
        cNu = 1;
    }
})

cardMm.addEventListener('focusout', (evento) => {
    mm = evento.target.value
})

cardYy.addEventListener('focusout', (evento) => {
    const yy = document.querySelector('.card__exp')
    const mY = document.querySelector('.mis__mY');
    mm === "" ? eM = 0 : eM = 1;
    cardYy.value.length === 0 ? eY = 0 : eY = 1;
    if (mm === "" || cardYy.value.length === 0) {
        mY.classList.remove('ative')
    } else {
        mY.classList.add('ative');
        yy.innerHTML = `${mm}/${evento.target.value}`
    }

})

cardCvc.addEventListener('focusout', (evento) => {
    const cvc = document.querySelector('.card__cvc');
    const mis__cvc = document.querySelector('.mis__cvc');
    if (cardCvc.value.length === 0) {
        mis__cvc.classList.remove('ative')
        cv = 0;
    } else {
        mis__cvc.classList.add('ative');
        cvc.innerHTML = evento.target.value
        cv = 1
    }
})

btnConfirm.addEventListener('click', () => {
    event.preventDefault()
    const dados = document.querySelector('.dados')
    const complete = document.querySelector('.complete')
    const valida = parseInt(cN + cNu + eM + eY + cv);
    if (valida != 5) {
        const btnclass = document.querySelector('.mis__btn');
        btnclass.classList.remove('ative')
    } else {
        dados.classList.add('ative');
        complete.classList.remove('ative')
    }
})


