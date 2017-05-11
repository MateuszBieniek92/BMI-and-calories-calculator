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

    console.log(bmiForm, caloriesForm);
    console.log(navigationChildren);


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


    
    init();


});