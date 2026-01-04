console.log('Client side javascript file is loaded!');

// Custom Select Functionality
const selectButton = document.getElementById('selectButton');
const selectDropdown = document.getElementById('selectDropdown');
const selectOptions = document.querySelectorAll('.select-option');
const unitsInput = document.getElementById('units');

selectButton.addEventListener('click', () => {
    selectDropdown.classList.toggle('active');
});

selectOptions.forEach(option => {
    option.addEventListener('click', () => {
        const value = option.getAttribute('data-value');
        const text = option.textContent;
        
        unitsInput.value = value;
        selectButton.textContent = text;
        
        selectOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        
        selectDropdown.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.custom-select')) {
        selectDropdown.classList.remove('active');
    }
});

// Weather Form Functionality
const weatherForm = document.querySelector('form');
const search = document.querySelector('input[type="text"]');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;
    const units = unitsInput.value;

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    fetch(`/weather?address=${location}&units=${units}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        })
    })
})