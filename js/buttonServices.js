const card1 = document.getElementById('card_garden_first');
const card2 = document.getElementById('card_planting_first');
const card3 = document.getElementById('card_lawn');
const card4 = document.getElementById('card_planting_second');
const card5 = document.getElementById('card_garden_second');
const card6 = document.getElementById('card_planting_third');
const btn1 = document.getElementById('btn_first');
const btn2 = document.getElementById('btn_second');
const btn3 = document.getElementById('btn_third');

function btnGardens() {
    if (btn2.classList.contains('services_btn_active') == false && btn3.classList.contains('services_btn_active') == false) {
        btn1.classList.toggle('services_btn_active');
        card3.classList.toggle('blur');
        card2.classList.toggle('blur');
        card4.classList.toggle('blur');
        card6.classList.toggle('blur');
    } else if (btn2.classList.contains('services_btn_active') == true) {
        btn1.classList.toggle('services_btn_active');
        card1.classList.toggle('blur');
        card5.classList.toggle('blur');
    } else if (btn3.classList.contains('services_btn_active') == true) {
        btn1.classList.toggle('services_btn_active');
        card1.classList.toggle('blur');
        card5.classList.toggle('blur');
    }
}

function btnLawn() {
    if (btn1.classList.contains('services_btn_active') == false && btn3.classList.contains('services_btn_active') == false) {
        btn2.classList.toggle('services_btn_active');
        card1.classList.toggle('blur');
        card5.classList.toggle('blur');
        card2.classList.toggle('blur');
        card4.classList.toggle('blur');
        card6.classList.toggle('blur');
    } else if (btn1.classList.contains('services_btn_active') == true) {
        btn2.classList.toggle('services_btn_active');
        card3.classList.toggle('blur');
    } else if (btn3.classList.contains('services_btn_active') == true) {
        btn2.classList.toggle('services_btn_active');
        card3.classList.toggle('blur');
    }
}

function btnPlanting() {
    if (btn1.classList.contains('services_btn_active') == false && btn2.classList.contains('services_btn_active') == false) {
        btn3.classList.toggle('services_btn_active');
        card3.classList.toggle('blur');
        card1.classList.toggle('blur');
        card5.classList.toggle('blur');
    } else if (btn1.classList.contains('services_btn_active') == true) {
        btn3.classList.toggle('services_btn_active');
        card2.classList.toggle('blur');
        card4.classList.toggle('blur');
        card6.classList.toggle('blur');
    } else if (btn2.classList.contains('services_btn_active') == true) {
        btn3.classList.toggle('services_btn_active');
        card2.classList.toggle('blur');
        card4.classList.toggle('blur');
        card6.classList.toggle('blur');
    }
}