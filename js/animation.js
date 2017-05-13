document.addEventListener("DOMContentLoaded", function () {

    const bmiForm = document.querySelector('.bmi');
    const caloriesForm = document.querySelector('.calories');
    const basicMetaForm = document.querySelector('.basicMetabolism');
    const totalMetaForm = document.querySelector('.totalMetabolism');

    const firstMenuBtn = document.querySelector('.btnOne');
    const secondMenuBtn = document.querySelector('.btnTwo');
    const thirdMenuBtn = document.querySelector('.btnThree');
    const fourthMenuBtn = document.querySelector('.btnFour');

    const hamburgerBtn = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');
    const navigationChildren = navigation.querySelectorAll('li');

    const bmiBtn = document.querySelector('.bmiBtn');

    console.log(bmiForm, caloriesForm);
    console.log(navigationChildren);

    function bmiTEST() {


        var test = heightVal * Math.pow(10, -2);
        var mass = weightVal;
        var bmi = mass / Math.pow(test, 2);
        console.log(test, mass);
        console.log(bmi);

        var t = document.querySelector('.test');
        t.innerText = Math.round(bmi * 4) / 4;

    }


    function init() {
        bmiForm.style.display = 'block';
        caloriesForm.style.display = 'none';
        basicMetaForm.style.display = 'none';
        totalMetaForm.style.display = 'none';
    }


    function firstFormShow() {
        bmiForm.style.display = 'block';
        caloriesForm.style.display = 'none';
        basicMetaForm.style.display = 'none';
        totalMetaForm.style.display = 'none';
    }

    function secondFormShow() {
        bmiForm.style.display = 'none';
        caloriesForm.style.display = 'block';
        basicMetaForm.style.display = 'none';
        totalMetaForm.style.display = 'none';
    }

    function thirdFormShow() {
        bmiForm.style.display = 'none';
        caloriesForm.style.display = 'none';
        basicMetaForm.style.display = 'block';
        totalMetaForm.style.display = 'none';
    }

    function fourthFormShow() {
        bmiForm.style.display = 'none';
        caloriesForm.style.display = 'none';
        basicMetaForm.style.display = 'none';
        totalMetaForm.style.display = 'block';
    }

    function toggleHamburger(type) {
        type.classList.toggle('change');
    }

    function toggleMenu() {
        if (navigation.style.display === 'block') {
            navigation.style.display = 'none';
        } else {
            navigation.style.display = 'block';
        }
    }

    // CLICK EVENTS    

    firstMenuBtn.addEventListener('click', function () {
        firstFormShow();
        console.log('click');
    });

    secondMenuBtn.addEventListener('click', function () {
        secondFormShow();
        console.log('click');
    });

    thirdMenuBtn.addEventListener('click', function () {
        thirdFormShow();
        console.log('click');
    });

    fourthMenuBtn.addEventListener('click', function () {
        fourthFormShow();
        console.log('click');
    });

    hamburgerBtn.addEventListener('click', function () {
        toggleHamburger(this);
        toggleMenu();
        console.log('click');
    });

    bmiBtn.addEventListener('click', function (e) {
        const form = document.querySelector('.bmiForm');
        const height = form.querySelector('.firstInputBmi');
        const weight = form.querySelector('.secondInputBmi');

        const heightVal = height.value;
        const weightVal = weight.value;
        const isNumericHeight = parseInt(heightVal);
        const isNumericWeight = parseInt(weightVal);

        let sendForm = 'false';
        const text = document.querySelector('.test');
        text.innerText = '';

       // console.log(heightVal, weightVal);

        const test = heightVal * Math.pow(10, -2);
        const mass = weightVal;
        const bmi = mass / Math.pow(test, 2);
        console.log(test, mass);
        console.log(bmi);


        if (heightVal !== "" && weightVal !== "") {
            if (isNumericHeight && isNumericWeight) {
                if (heightVal.length > 2) {
                    if (weightVal.length > 1) {
                        text.innerText = Math.round(bmi * 4) / 4;
                        sendForm = true;
                    } else {
                        text.innerText = "Podana waga nie jest prawidłowa!"
                    }
                } else {
                    text.innerText = "Podany wzrost nie jest prawidłowy!"
                }
            } else {
                text.innerText = "Podane parametry nie są liczbami!"
            }
        } else {
            text.innerText = "Wypełnij pole formularza!"
        }

        console.log(height);
        e.preventDefault();

    });


    init();


});