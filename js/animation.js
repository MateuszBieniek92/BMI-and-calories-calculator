document.addEventListener("DOMContentLoaded", function () {

    // FORM 1 - BMI CALCULATOR
    // menu btns
    const bmiForm = document.querySelector('.bmi');
    const caloriesForm = document.querySelector('.calories');
    const basicMetaForm = document.querySelector('.basicMetabolism');
    const totalMetaForm = document.querySelector('.totalMetabolism');

    const firstMenuBtn = document.querySelector('.btnOne');
    const secondMenuBtn = document.querySelector('.btnTwo');
    const thirdMenuBtn = document.querySelector('.btnThree');

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
    const input = document.querySelectorAll('input');

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

    //close form bg
    const closeFormBg = document.querySelector('.bgClick');
    // close form btn
    const closeFormBtn = closeFormBg.querySelector('.closeFormBtn');

    // result spans 
    const result = closeFormBg.querySelector('.result');
    const desc = closeFormBg.querySelector('.description');
    const head = closeFormBg.querySelector('.head');
    const errorText = document.querySelector('.errorLabel');
    const bmiScale = document.querySelector('.bmiScale');

    function init() {
        bmiForm.style.display = 'block';
        basicMetaForm.style.display = 'none';
        totalMetaForm.style.display = 'none';
    }

    function resetForm() {
        form.reset();
    }

    function firstFormShow() {
        bmiForm.style.display = 'block';
        basicMetaForm.style.display = 'none';
        totalMetaForm.style.display = 'none';
    }

    function secondFormShow() {
        bmiForm.style.display = 'none';
        basicMetaForm.style.display = 'block';
        totalMetaForm.style.display = 'none';
    }

    function thirdFormShow() {
        bmiForm.style.display = 'none';
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

    function closeForm() {
        closeFormBg.style.display = "none";
    }

    function roundNumber(n, k) {
        const factor = Math.pow(10, k);
        return Math.round(n * factor) / factor;
    }

    function bmiFormSend(type) {
        const heightVal = height.value;
        const weightVal = weight.value;
        const isNumericHeight = parseInt(heightVal);
        const isNumericWeight = parseInt(weightVal);

        errorText.innererrorText = '';

        // bmi parameters
        const hei = heightVal * Math.pow(10, -2);
        const mass = weightVal;
        const bmi = mass / Math.pow(hei, 2);

        //        console.log(hei, mass);
        //        console.log(bmi);
        //        console.log(typeof bmi);

        function bmiLevel() {
            if (bmi < 16) {
                head.innerText = 'Uwaga!';
                desc.innerText = 'wygłodzenie';
                result.style.color = 'red';
            } else if (16.00 < bmi && bmi < 16.99) {
                head.innerText = 'Uwaga!';
                desc.innerText = 'wychudzenie';
                result.style.color = 'red';
            } else if (17.00 < bmi && bmi < 18.49) {
                head.innerText = 'Uwaga!';
                desc.innerText = 'niedowagę';
                result.style.color = 'red';
            } else if (18.50 < bmi && bmi < 24.99) {
                head.innerText = 'Gratulacje!';
                desc.innerText = 'wagę prawidłową';
            } else if (25.00 < bmi && bmi < 29.99) {
                head.innerText = 'Uwaga!';
                desc.innerText = 'nadwagę';
                result.style.color = 'red';
            } else if (30.00 < bmi && bmi < 34.99) {
                head.innerText = 'Uwaga!';
                desc.innerText = 'I stopień otyłości';
                result.style.color = 'red';
            } else if (35.00 < bmi && bmi < 39.99) {
                head.innerText = 'Uwaga!';
                desc.innerText = 'II stopień otyłości';
                result.style.color = 'red';
            } else if (bmi > 40.00) {
                head.innerText = 'Uwaga!';
                desc.innerText = 'III stopień otyłości';
                result.style.color = 'red';
            }
        }

        heightLabel.style.color = "black";
        genderLabel.style.color = "black";
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
                            bmiLevel();
                            result.innerText = roundNumber(bmi, 2);
                            bmiScale.style.display = 'block';
                            closeFormBg.style.display = "block";
                            errorText.innerText = '';
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
            errorText.innerText = "Wypełnij dane formularza!";
        }

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

    hamburgerBtn.addEventListener('click', function () {
        toggleHamburger(this);
        toggleMenu();
    });

    bmiBtn.addEventListener('click', function (e) {
        bmiFormSend();
        e.preventDefault();
    });

    closeFormBtn.addEventListener('click', function () {
        closeForm();
        resetForm();
    });




    // FORM 2 - BASIC METABOLISM CALCULATOR

    //const basicMetaForm = document.querySelector('.basicMetabolism');

    const bmForm = basicMetaForm.querySelector('.bmForm');

    //option 
    const methodOption = bmForm.querySelector('.methodOption');
    const methodOne = methodOption.children[0];
    const methodTwo = methodOption.children[1];

    //gender labels
    const gender = bmForm.querySelector('#genderType');
    const genderWoman = bmForm.querySelector('#genderWoman');
    const genderMan = bmForm.querySelector('#genderMan');

    //sex
    const womanBasicMeta = bmForm.querySelector('.womanRadio');
    const menBasicMeta = bmForm.querySelector('.menRadio');

    //old labels and input
    const oldLabel = bmForm.querySelector('#oldLabel');
    const oldInput = bmForm.querySelector('.thirdInputBmi');
    const oldUnit = bmForm.querySelector('#oldUnit');

    //height labels and unit

    const heightBasicMeta = bmForm.querySelector('#heightLabel');
    const heightInputBasicMeta = bmForm.querySelector('.firstInputBmi');
    const cmUnitBasicMeta = bmForm.querySelector('#cmUnit');

    //weight labels and unit

    const weightBasicMeta = bmForm.querySelector('#weightLabel');
    const weightInputBasicMeta = bmForm.querySelector('.secondInputBmi');
    const kgUnitBasicMeta = bmForm.querySelector('#kgUnit');

    // error btn

    const errorLabelBasicMeta = bmForm.querySelector('.errorLabel');
    // submit Basic Meta btn
    const caloriesBtn = basicMetaForm.querySelector('.caloriesBtn');


    function basicMetabolismFormSend(type) {
        const oldVal = oldInput.value;
        const heightVal = heightInputBasicMeta.value;
        const weightVal = weightInputBasicMeta.value;
        const isNumericOld = parseInt(oldVal);
        const isNumericHeight = parseInt(heightVal);
        const isNumericWeight = parseInt(weightVal);

        function benedictHarris() {
            var ppm;
            if (womanBasicMeta.checked) {
                ppm = 665.1 + (9.5634 * weightVal) + (1.8496 * heightVal) - (4.6756 * oldVal);
            } else if (menBasicMeta.checked) {
                ppm = 66.5 + (13.75 * weightVal) + (5.003 * heightVal) - (6.775 * oldVal);
            }
            return ppm;
        }

        function mifflinJeor() {
            var ppm;
            if (womanBasicMeta.checked) {
                ppm = (10 * weightVal) + (6.25 * heightVal) - (5 * oldVal) - 161;
            } else if (menBasicMeta.checked) {
                ppm = (10 * weightVal) + (6.25 * heightVal) - (5 * oldVal) + 5;
            }
            return ppm;
        }

        function methodSelected() {
            if (methodOne.selected) {
                benedictHarris();
                console.log(benedictHarris());
            } else if (methodTwo.selected) {
                mifflinJeor()
                console.log(mifflinJeor());
            }
        }

        function oldAlert() {
            oldLabel.style.color = "red";
            oldUnit.style.color = "red";
            oldInput.style.border = "2px solid red";
        }


        function heightAlert() {
            heightBasicMeta.style.color = "red";
            cmUnitBasicMeta.style.color = "red";
            heightInputBasicMeta.style.border = "2px solid red";
        }

        function weightAlert() {
            weightBasicMeta.style.color = "red";
            kgUnitBasicMeta.style.color = "red";
            weightInputBasicMeta.style.border = "2px solid red";
        }

        function genderAlert() {
            gender.style.color = "red";
            genderWoman.style.color = "red";
            genderMan.style.color = "red";
        }





        errorLabelBasicMeta.innererrorText = '';
        gender.style.color = "black";
        genderWoman.style.color = "black";
        genderMan.style.color = "black";
        oldLabel.style.color = "black";
        oldUnit.style.color = "black";
        heightBasicMeta.style.color = "black";
        cmUnitBasicMeta.style.color = "black";
        weightBasicMeta.style.color = "black";
        kgUnitBasicMeta.style.color = "black";

        oldInput.style.border = "none";
        heightInputBasicMeta.style.border = "none";
        weightInputBasicMeta.style.border = "none";

        if (oldVal !== "" && heightVal !== "" && weightVal !== "") {
            if (isNumericOld && isNumericHeight && isNumericWeight) {
                if (oldVal >= 6 && oldVal <= 99) {
                    if (heightVal.length > 2) {
                        if (weightVal.length > 1) {
                            if (menBasicMeta.checked == true || womanBasicMeta.checked == true) {
                                errorLabelBasicMeta.innerText = '';
                                methodSelected();



                            } else {
                                errorLabelBasicMeta.innerText = "Zaznacz płeć!";
                                genderAlert();
                            }

                        } else {
                            errorLabelBasicMeta.innerText = "Podana waga nie jest prawidłowa!";
                            weightAlert();
                        }
                    } else {
                        errorLabelBasicMeta.innerText = "Podany wzrost nie jest prawidłowy!";
                        heightAlert();
                    }
                } else {
                    errorLabelBasicMeta.innerText = "Podany wiek nie jest prawidłowy!";
                    oldAlert();
                }
            } else {
                if (isNumericOld && isNumericWeight) {
                    heightAlert();
                    errorLabelBasicMeta.innerText = "Wzrost musi być liczbą!";
                } else if (isNumericOld && isNumericHeight) {
                    weightAlert();
                    errorLabelBasicMeta.innerText = "Waga musi być liczbą!";
                } else if (isNumericHeight && isNumericWeight) {
                    oldAlert();
                    errorLabelBasicMeta.innerText = "Wiek musi być liczbą!";
                } else if (isNumericOld) {
                    heightAlert();
                    weightAlert();
                    errorLabelBasicMeta.innerText = "Wzrost i waga muszą być liczbami!";
                } else if (isNumericHeight) {
                    oldAlert();
                    weightAlert();
                    errorLabelBasicMeta.innerText = "Wiek i waga muszą być liczbami!";
                } else if (isNumericWeight) {
                    oldAlert();
                    heightAlert();
                    errorLabelBasicMeta.innerText = "Wiek i wzrost muszą być liczbami!";
                } else {
                    errorLabelBasicMeta.innerText = "Podane parametry nie są liczbami!";
                    oldAlert();
                    heightAlert();
                    weightAlert();
                }
            }
        } else {
            if (oldVal !== "" && heightVal == "" && weightVal == "") {
                heightAlert();
                weightAlert();
            } else if (oldVal !== "" && heightVal !== "" && weightVal == "") {
                weightAlert();
            } else if (oldVal !== "" && heightVal == "" && weightVal !== "") {
                heightAlert();
            } else if (heightVal !== "" && oldVal == "" && weightVal == "") {
                oldAlert();
                weightAlert();
            } else if (heightVal !== "" && oldVal !== "" && weightVal == "") {
                weightAlert();
            } else if (heightVal !== "" && oldVal == "" && weightVal !== "") {
                oldAlert();
            } else if (weightVal !== "" && heightVal == "" && oldVal == "") {
                oldAlert();
                heightAlert();
            } else if (weightVal !== "" && heightVal !== "" && oldVal == "") {
                heightAlert();
            } else {
                oldAlert();
                heightAlert();
                weightAlert();
            }
            errorLabelBasicMeta.style.color = "red";
            errorLabelBasicMeta.innerText = "Wypełnij dane formularza!";
        }
    }

    caloriesBtn.addEventListener('click', function (e) {
        basicMetabolismFormSend();
        e.preventDefault();
    });


    init();
});