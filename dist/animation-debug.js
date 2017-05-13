document.addEventListener("DOMContentLoaded", function () {

    // menu btns
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

    //form variables
    const form = document.querySelector('.bmiForm');
    const height = form.querySelector('.firstInputBmi');
    const weight = form.querySelector('.secondInputBmi');
    const menRadio = form.querySelector('.menRadio');
    const womanRadio = form.querySelector('.womanRadio');
    const bmiBtn = document.querySelector('.bmiBtn');

    // gender label
    const genderLabel = form.querySelector('#genderType');
    const womanLabel = form.querySelector('#genderWoman');
    const manLabel = form.querySelector('#genderMan');
    // height label
    const heightLabel = document.querySelector('#heightLabel');
    const cmLabel = form.querySelector('#cmUnit');

    // weight label
    const weightLabel = document.querySelector('#weightLabel');
    const kgLabel = form.querySelector('#kgUnit');

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

    function roundNumber(n, k) {
        var factor = Math.pow(10, k);
        return Math.round(n * factor) / factor;
    }

    function bmiFormSend() {
        const heightVal = height.value;
        const weightVal = weight.value;
        const isNumericHeight = parseInt(heightVal);
        const isNumericWeight = parseInt(weightVal);

        //let sendForm = 'false';
        const errorText = document.querySelector('.errorLabel');
        errorText.innererrorText = '';

        // console.log(heightVal, weightVal);


        // bmi parameters
        const hei = heightVal * Math.pow(10, -2);
        const mass = weightVal;
        const bmi = mass / Math.pow(hei, 2);
        console.log(hei, mass);
        console.log(bmi);

        heightLabel.style.color = "black";
        genderLabel.style.color = "black";
        errorText.style.color = "black";
        manLabel.style.color = "black";
        womanLabel.style.color = "black";
        cmLabel.style.color = "black";
        height.style.border = "none";
        weightLabel.style.color = "black";
        kgLabel.style.color = "black";
        weight.style.border = "none";


        if (heightVal !== "" && weightVal !== "") {
            if (isNumericHeight && isNumericWeight) {
                if (heightVal.length > 2) {
                    if (weightVal.length > 1) {
                        if (menRadio.checked == true || womanRadio.checked == true) {
                            errorText.innerText = 'Twoje BMI wynosi: ' + roundNumber(bmi, 2);
                           // sendForm = true;
                        } else {
                            errorText.innerText = "Zaznacz płeć!"
                            genderLabel.style.color = "red";
                            manLabel.style.color = "red";
                            womanLabel.style.color = "red";
                        }
                    } else {
                        errorText.innerText = "Podana waga nie jest prawidłowa!"
                        weightLabel.style.color = "red";
                        kgLabel.style.color = "red";
                        weight.style.border = "2px solid red";
                    }
                } else {
                    errorText.innerText = "Podany wzrost nie jest prawidłowy!"
                    heightLabel.style.color = "red";
                    cmLabel.style.color = "red";
                    height.style.border = "2px solid red";
                }
            } else {
                errorText.innerText = "Podane parametry nie są liczbami!"
                heightLabel.style.color = "red";
                cmLabel.style.color = "red";
                height.style.border = "2px solid red";
                weightLabel.style.color = "red";
                kgLabel.style.color = "red";
                weight.style.border = "2px solid red";
            }

        } else {
            if (heightVal !== "") {
                weightLabel.style.color = "red";
                kgLabel.style.color = "red";
                weight.style.border = "2px solid red";
            } else if (weightVal !== "") {
                heightLabel.style.color = "red";
                cmLabel.style.color = "red";
                height.style.border = "2px solid red";
            } else {
                heightLabel.style.color = "red";
                cmLabel.style.color = "red";
                height.style.border = "2px solid red";
                weightLabel.style.color = "red";
                kgLabel.style.color = "red";
                weight.style.border = "2px solid red";
            }
            errorText.innerText = "Wypełnij dane formularza!"
        }
        console.log(height);
    }

    // CLICK EVENTS    

    firstMenuBtn.addEventListener('click', function () {
        firstFormShow();
    });

    secondMenuBtn.addEventListener('click', function () {
        secondFormShow();
    });

    thirdMenuBtn.addEventListener('click', function () {
        thirdFormShow();
    });

    fourthMenuBtn.addEventListener('click', function () {
        fourthFormShow();
    });

    hamburgerBtn.addEventListener('click', function () {
        toggleHamburger(this);
        toggleMenu();
    });

    bmiBtn.addEventListener('click', function (e) {
        bmiFormSend();
        e.preventDefault();
    });


    init();


});