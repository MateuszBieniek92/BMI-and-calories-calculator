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

    console.log(bmiForm, caloriesForm);


    function init() {
        bmiForm.style.display = 'block';
        caloriesForm.style.display = 'none';
        basicMetaForm.style.display = 'none';
        totalMetaForm.style.display = 'none';
    }


    function firstFormShow() {
        // if (bmiForm.style.display === 'none') {
        bmiForm.style.display = 'block';
        caloriesForm.style.display = 'none';
        basicMetaForm.style.display = 'none';
        totalMetaForm.style.display = 'none';
        //        } else {
        //            bmiForm.display = 'none';
        //        }
    }

    function secondFormShow() {
        // if (bmiForm.style.display === 'none') {
        bmiForm.style.display = 'none';
        caloriesForm.style.display = 'block';
        basicMetaForm.style.display = 'none';
        totalMetaForm.style.display = 'none';
        //        } else {
        //            bmiForm.display = 'none';
        //        }
    }

    function thirdFormShow() {
        // if (bmiForm.style.display === 'none') {
        bmiForm.style.display = 'none';
        caloriesForm.style.display = 'none';
        basicMetaForm.style.display = 'block';
        totalMetaForm.style.display = 'none';
        //        } else {
        //            bmiForm.display = 'none';
        //        }
    }

    function fourthFormShow() {
        // if (bmiForm.style.display === 'none') {
        bmiForm.style.display = 'none';
        caloriesForm.style.display = 'none';
        basicMetaForm.style.display = 'none';
        totalMetaForm.style.display = 'block';
        //        } else {
        //            bmiForm.display = 'none';
        //        }
    }
    
    function toggleHamburger(x) {
        x.classList.toggle('change');
    }


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
        console.log('click');
    });


    init();
    
    
});


//function myFunction() {
//    var x = document.getElementById('myDIV');
//    if (x.style.display === 'none') {
//        x.style.display = 'block';
//    } else {
//        x.style.display = 'none';
//    }
//}