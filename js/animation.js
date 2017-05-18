document.addEventListener("DOMContentLoaded", function () {

    var mobile = window.matchMedia("screen and (max-width: 800px)");

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
    
    //photo div
    const photo = document.querySelector('.photo');

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
    const bmiDesc = closeFormBg.querySelector('.bmidesc');
    const ppmDesc = closeFormBg.querySelector('.ppmdesc');
    const tpmDesc = closeFormBg.querySelector('.tpmdesc');
    const ppmResult = ppmDesc.querySelector('.result');
    const tpmResult = tpmDesc.querySelector('.result');
    const desc = bmiDesc.querySelector('.description');
    const head = closeFormBg.querySelector('.head');
    const errorText = document.querySelector('.errorLabel');
    const bmiScale = document.querySelector('.bmiScale');
    const ppmScale = document.querySelector('.ppmScale');
    const tpmScale = document.querySelector('.tpmScale');

    // FORM 2 - BASIC METABOLISM CALCULATOR

    //const basicMetaForm = document.querySelector('.basicMetabolism');

    const bmForm = basicMetaForm.querySelector('.bmForm');

    //option 
    const methodOption = bmForm.querySelector('.methodOption');
    const methodOne = methodOption.children[0];
    const methodTwo = methodOption.children[1];

    //gender labels
    const bmGender = bmForm.querySelector('#genderType');
    const bmGenderWoman = bmForm.querySelector('#genderWoman');
    const bmGenderMan = bmForm.querySelector('#genderMan');

    //sex
    const bmWoman = bmForm.querySelector('.womanRadio');
    const bmMen = bmForm.querySelector('.menRadio');

    //old labels and input
    const bmOldLabel = bmForm.querySelector('#oldLabel');
    const bmOldInput = bmForm.querySelector('.thirdInputBmi');
    const bmOldUnit = bmForm.querySelector('#oldUnit');

    //height labels and unit

    const bmHeight = bmForm.querySelector('#heightLabel');
    const bmHeightInput = bmForm.querySelector('.firstInputBmi');
    const bmCmUnit = bmForm.querySelector('#cmUnit');

    //weight labels and unit

    const bmWeight = bmForm.querySelector('#weightLabel');
    const bmWeightInput = bmForm.querySelector('.secondInputBmi');
    const bmKgUnit = bmForm.querySelector('#kgUnit');

    // error btn

    const bmErrorLabel = bmForm.querySelector('.errorLabel');
    // submit Basic Meta btn
    const caloriesBtn = basicMetaForm.querySelector('.caloriesBtn');

    // FORM 3 - BASIC METABOLISM CALCULATOR

    //const basicMetaForm = document.querySelector('.basicMetabolism');

    const tmForm = totalMetaForm.querySelector('.tmForm');

    //gender labels
    const tmGender = tmForm.querySelector('#genderType');
    const tmGenderWoman = tmForm.querySelector('#genderWoman');
    const tmGenderMan = tmForm.querySelector('#genderMan');

    //sex
    const tmWoman = tmForm.querySelector('.womanRadio');
    const tmMen = tmForm.querySelector('.menRadio');

    //old labels and input
    const tmOldLabel = tmForm.querySelector('#oldLabel');
    const tmOldInput = tmForm.querySelector('.thirdInputBmi');
    const tmOldUnit = tmForm.querySelector('#oldUnit');

    //height labels and unit

    const tmHeight = tmForm.querySelector('#heightLabel');
    const tmHeightInput = tmForm.querySelector('.firstInputBmi');
    const tmCmUnit = tmForm.querySelector('#cmUnit');

    //weight labels and unit

    const tmWeight = tmForm.querySelector('#weightLabel');
    const tmWeightInput = tmForm.querySelector('.secondInputBmi');
    const tmKgUnit = tmForm.querySelector('#kgUnit');

    //option 
    const tmActivity = tmForm.querySelector('.activity');
    const zeroActivity = tmActivity.children[0];
    const smallActivity = tmActivity.children[1];
    const mediumActivity = tmActivity.children[2];
    const activeActivity = tmActivity.children[3];
    const bigActivity = tmActivity.children[4];
    const veryBigActivity = tmActivity.children[5];

    // error btn

    const tmErrorLabel = tmForm.querySelector('.errorLabel');
    // submit Basic Meta btn
    const tmBtn = totalMetaForm.querySelector('.totalMetabolismBtn');

    function init() {
        bmiForm.style.display = 'block';
        basicMetaForm.style.display = 'none';
        totalMetaForm.style.display = 'none';
        bmiDesc.style.display = 'none';
        ppmDesc.style.display = 'none';
        tpmDesc.style.display = 'none';
        bmiScale.style.display = 'none';
        ppmScale.style.display = 'none';
        tpmScale.style.display = 'none';
    }

    function resetSendForm() {
        bmiDesc.style.display = 'none';
        ppmDesc.style.display = 'none';
        bmiScale.style.display = 'none';
        ppmScale.style.display = 'none';
    }

    function resetForm() {
        form.reset();
        bmForm.reset();
        tmForm.reset();
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
        if (mobile.matches) {
            type.classList.toggle('change');
//            if (closeFormBg.style.display === 'block') {
//                type.classList.toggle('change');
//            } else if (closeFormBg.style.display === 'none') {
//                type.classList.toggle('change');
//            }
        }
    }

    function toggleMenu() {
        if (mobile.matches) {
            if (navigation.style.display === 'block') {
                navigation.style.display = 'none';
//            } else if (closeFormBg.style.display === "block") {
//                navigation.style.display = 'none';
            } else {
                navigation.style.display = 'block';
            }
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
                                result.style.color = '';
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
                            bmiDesc.style.display = 'block';
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

    function basicMetabolismFormSend() {
        const oldVal = bmOldInput.value;
        const heightVal = bmHeightInput.value;
        const weightVal = bmWeightInput.value;
        const isNumericOld = parseInt(oldVal);
        const isNumericHeight = parseInt(heightVal);
        const isNumericWeight = parseInt(weightVal);

        function benedictHarris() {
            var ppm;
            if (bmWoman.checked) {
                ppm = 665.1 + (9.5634 * weightVal) + (1.8496 * heightVal) - (4.6756 * oldVal);
            } else if (bmMen.checked) {
                ppm = 66.5 + (13.75 * weightVal) + (5.003 * heightVal) - (6.775 * oldVal);
            }
            return ppmResult.innerText = roundNumber(ppm, 2);
        }

        function mifflinJeor() {
            var ppm;
            if (bmWoman.checked) {
                ppm = (10 * weightVal) + (6.25 * heightVal) - (5 * oldVal) - 161;
            } else if (bmMen.checked) {
                ppm = (10 * weightVal) + (6.25 * heightVal) - (5 * oldVal) + 5;
            }
            return ppmResult.innerText = roundNumber(ppm, 2);
        }

        function methodSelected() {
            if (methodOne.selected) {
                benedictHarris();
            } else if (methodTwo.selected) {
                mifflinJeor();
            }
        }


        function oldAlert() {
            bmOldLabel.style.color = "red";
            bmOldUnit.style.color = "red";
            bmOldInput.style.border = "2px solid red";
        }


        function heightAlert() {
            bmHeight.style.color = "red";
            bmCmUnit.style.color = "red";
            bmHeightInput.style.border = "2px solid red";
        }

        function weightAlert() {
            bmWeight.style.color = "red";
            bmKgUnit.style.color = "red";
            bmWeightInput.style.border = "2px solid red";
        }

        function genderAlert() {
            bmGender.style.color = "red";
            bmGenderWoman.style.color = "red";
            bmGenderMan.style.color = "red";
        }

        bmErrorLabel.innererrorText = '';
        bmGender.style.color = "black";
        bmGenderWoman.style.color = "black";
        bmGenderMan.style.color = "black";
        bmOldLabel.style.color = "black";
        bmOldUnit.style.color = "black";
        bmHeight.style.color = "black";
        bmCmUnit.style.color = "black";
        bmWeight.style.color = "black";
        bmKgUnit.style.color = "black";

        bmOldInput.style.border = "none";
        bmHeightInput.style.border = "none";
        bmWeightInput.style.border = "none";

        if (oldVal !== "" && heightVal !== "" && weightVal !== "") {
            if (isNumericOld && isNumericHeight && isNumericWeight) {
                if (oldVal >= 6 && oldVal <= 99) {
                    if (heightVal.length > 2) {
                        if (weightVal.length > 1) {
                            if (bmMen.checked == true || bmWoman.checked == true) {
                                methodSelected();
                                bmiDesc.style.display = 'none';
                                ppmDesc.style.display = 'none';
                                ppmScale.style.display = 'block';
                                ppmDesc.style.display = 'block';
                                closeFormBg.style.display = "block";
                                head.innerText = 'Gratulacje!';
                                bmErrorLabel.innerText = '';

                            } else {
                                bmErrorLabel.innerText = "Zaznacz płeć!";
                                genderAlert();
                            }

                        } else {
                            bmErrorLabel.innerText = "Podana waga nie jest prawidłowa!";
                            weightAlert();
                        }
                    } else {
                        bmErrorLabel.innerText = "Podany wzrost nie jest prawidłowy!";
                        heightAlert();
                    }
                } else {
                    bmErrorLabel.innerText = "Podany wiek nie jest prawidłowy!";
                    oldAlert();
                }
            } else {
                if (isNumericOld && isNumericWeight) {
                    heightAlert();
                    bmErrorLabel.innerText = "Wzrost musi być liczbą!";
                } else if (isNumericOld && isNumericHeight) {
                    weightAlert();
                    bmErrorLabel.innerText = "Waga musi być liczbą!";
                } else if (isNumericHeight && isNumericWeight) {
                    oldAlert();
                    bmErrorLabel.innerText = "Wiek musi być liczbą!";
                } else if (isNumericOld) {
                    heightAlert();
                    weightAlert();
                    bmErrorLabel.innerText = "Wzrost i waga muszą być liczbami!";
                } else if (isNumericHeight) {
                    oldAlert();
                    weightAlert();
                    bmErrorLabel.innerText = "Wiek i waga muszą być liczbami!";
                } else if (isNumericWeight) {
                    oldAlert();
                    heightAlert();
                    bmErrorLabel.innerText = "Wiek i wzrost muszą być liczbami!";
                } else {
                    bmErrorLabel.innerText = "Podane parametry nie są liczbami!";
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
            bmErrorLabel.style.color = "red";
            bmErrorLabel.innerText = "Wypełnij dane formularza!";
        }
    }

    function totalMetabolismFormSend() {
        const oldVal = tmOldInput.value;
        const heightVal = tmHeightInput.value;
        const weightVal = tmWeightInput.value;
        const isNumericOld = parseInt(oldVal);
        const isNumericHeight = parseInt(heightVal);
        const isNumericWeight = parseInt(weightVal);



        function oldAlert() {
            tmOldLabel.style.color = "red";
            tmOldUnit.style.color = "red";
            tmOldInput.style.border = "2px solid red";
        }


        function heightAlert() {
            tmHeight.style.color = "red";
            tmCmUnit.style.color = "red";
            tmHeightInput.style.border = "2px solid red";
        }

        function weightAlert() {
            tmWeight.style.color = "red";
            tmKgUnit.style.color = "red";
            tmWeightInput.style.border = "2px solid red";
        }

        function genderAlert() {
            tmGender.style.color = "red";
            tmGenderWoman.style.color = "red";
            tmGenderMan.style.color = "red";
        }

        function mifflinJeor() {
            var ppm;
            if (tmWoman.checked) {
                ppm = (10 * weightVal) + (6.25 * heightVal) - (5 * oldVal) - 161;
            } else if (tmMen.checked) {
                ppm = (10 * weightVal) + (6.25 * heightVal) - (5 * oldVal) + 5;
            }
            return roundNumber(ppm, 2);
        }

        function active() {
            var pal;
            if (zeroActivity.selected) {
                pal = 1.25;
            } else if (smallActivity.selected) {
                pal = 1.4;
            } else if (mediumActivity.selected) {
                pal = 1.6;
            } else if (activeActivity.selected) {
                pal = 1.75;
            } else if (bigActivity.selected) {
                pal = 2.0;
            } else if (veryBigActivity.selected) {
                pal = 2.30;
            }
            return pal;
        }

        function cpmResult() {
            var cpm;
            cpm = mifflinJeor() * active();
            return tpmResult.innerText = roundNumber(cpm, 2);
        }

        tmErrorLabel.innererrorText = '';
        tmGender.style.color = "black";
        tmGenderWoman.style.color = "black";
        tmGenderMan.style.color = "black";
        tmOldLabel.style.color = "black";
        tmOldUnit.style.color = "black";
        tmHeight.style.color = "black";
        tmCmUnit.style.color = "black";
        tmWeight.style.color = "black";
        tmKgUnit.style.color = "black";

        tmOldInput.style.border = "none";
        tmHeightInput.style.border = "none";
        tmWeightInput.style.border = "none";

        if (oldVal !== "" && heightVal !== "" && weightVal !== "") {
            if (isNumericOld && isNumericHeight && isNumericWeight) {
                if (oldVal >= 6 && oldVal <= 99) {
                    if (heightVal.length > 2) {
                        if (weightVal.length > 1) {
                            if (tmMen.checked == true || tmWoman.checked == true) {
                                cpmResult();
                                console.log(cpmResult());
                                tpmScale.style.display = 'block';
                                tpmDesc.style.display = 'block';

                                bmiDesc.style.display = 'none';
                                ppmDesc.style.display = 'none';
                                ppmScale.style.display = 'none';
                                ppmDesc.style.display = 'none';

                                closeFormBg.style.display = "block";
                                head.innerText = 'Gratulacje!';
                                tmErrorLabel.innerText = '';

                            } else {
                                tmErrorLabel.innerText = "Zaznacz płeć!";
                                genderAlert();
                            }

                        } else {
                            tmErrorLabel.innerText = "Podana waga nie jest prawidłowa!";
                            weightAlert();
                        }
                    } else {
                        tmErrorLabel.innerText = "Podany wzrost nie jest prawidłowy!";
                        heightAlert();
                    }
                } else {
                    tmErrorLabel.innerText = "Podany wiek nie jest prawidłowy!";
                    oldAlert();
                }
            } else {
                if (isNumericOld && isNumericWeight) {
                    heightAlert();
                    tmErrorLabel.innerText = "Wzrost musi być liczbą!";
                } else if (isNumericOld && isNumericHeight) {
                    weightAlert();
                    tmErrorLabel.innerText = "Waga musi być liczbą!";
                } else if (isNumericHeight && isNumericWeight) {
                    oldAlert();
                    tmErrorLabel.innerText = "Wiek musi być liczbą!";
                } else if (isNumericOld) {
                    heightAlert();
                    weightAlert();
                    tmErrorLabel.innerText = "Wzrost i waga muszą być liczbami!";
                } else if (isNumericHeight) {
                    oldAlert();
                    weightAlert();
                    tmErrorLabel.innerText = "Wiek i waga muszą być liczbami!";
                } else if (isNumericWeight) {
                    oldAlert();
                    heightAlert();
                    tmErrorLabel.innerText = "Wiek i wzrost muszą być liczbami!";
                } else {
                    tmErrorLabel.innerText = "Podane parametry nie są liczbami!";
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
            tmErrorLabel.style.color = "red";
            tmErrorLabel.innerText = "Wypełnij dane formularza!";
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
        e.preventDefault();
        bmiFormSend();
        photo.style.display = "none";
//        toggleHamburger(hamburgerBtn);
//        toggleMenu();
    });



    caloriesBtn.addEventListener('click', function (e) {
        e.preventDefault();
        basicMetabolismFormSend();
        photo.style.display = "none";
//        toggleHamburger(hamburgerBtn);
//        toggleMenu();
    });

    tmBtn.addEventListener('click', function (e) {
        e.preventDefault();
        totalMetabolismFormSend();
        photo.style.display = "none";
//        toggleHamburger(hamburgerBtn);
//        toggleMenu();
    });
    closeFormBtn.addEventListener('click', function () {
        closeForm();
        resetForm();
        resetSendForm();
        init();
        photo.style.display = "block";
    });

    init();
});