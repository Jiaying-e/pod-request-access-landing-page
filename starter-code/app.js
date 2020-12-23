const buttonInput = document.querySelector('#inputbutton');
const emailInput = document.querySelector('#email');
const errorText = document.querySelector('#errortext');

buttonInput.addEventListener('click', function(){
    const inputValue = emailInput.value;
    console.log(inputValue);
    if(!inputValue){
        errorText.innerText = 'Oops! Please add your email';
        errorText.style.color = 'red';
    }

    else if (!(inputValue.includes('@'))){
        errorText.innerText = 'Oops! Please check your email';
        errorText.style.color = 'red';
    }

    else if (inputValue.includes('@')){
        errorText.innerText = '.';
        errorText.style.color = 'black';
    }
})