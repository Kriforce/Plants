let city = ['Canandaigua, NY', 'Yonkers, NY', 'Sherrill, NY', 'New York City'];
let phone = ['+1 585 393 0001', '+1 914 678 0003', '+1 315 908 0004', '+1 212 456 0002'];
let address = ['151 Charlotte Street', '511 Warburton Ave', '14 WEST Noyes BLVD', '19 East 91st Street'];
const cityText = document.getElementById('city_text');
const cityPhone = document.getElementById('phone');
const cityAddress = document.getElementById('address');
const title = document.getElementById('contacts_city_text');
const citiesList = document.getElementById('selected_city');
const label = document.getElementById('label');
const list = document.getElementById('city_list');
const arrow = document.getElementById('arrow');
const btn = document.getElementById('selected_city_button');

function openList() {
    if (list.style.display == 'none') {
        list.style.display = 'block';
    } else if (list.style.display == 'block') {
        list.style.display = 'none';
    }

    arrow.style.transform = 'rotate(180deg)';
    if (citiesList.style.display == 'none') {
        citiesList.style.display = 'block';
    } else if (citiesList.style.display = 'block') {
        citiesList.style.display = 'none';
    }

    btn.style.margin = '0px';
}

function changeStyle() {
    citiesList.style.display = 'flex';
    label.style.backgroundColor = 'rgb(193, 230, 152)';
    label.style.boxShadow = 'none';
    
    if (list.style.display = 'block') {
        list.style.display = 'none';
    }

    arrow.style.transform = 'rotate(0deg)';
}

function selectedCanandaigua() {
    title.textContent = city[0];
    cityText.textContent = city[0];
    cityPhone.textContent = phone[0];
    cityAddress.textContent = address[0];
}   

function selectedSherrill() {
    title.textContent = city[2];
    cityText.textContent = city[2];
    cityPhone.textContent = phone[2];
    cityAddress.textContent = address[2];
}

function selectedNY() {
    title.textContent = city[3];
    cityText.textContent = city[3];
    cityPhone.textContent = phone[3];
    cityAddress.textContent = address[3];
}

function selectedYonkers() {
    title.textContent = city[1];
    cityText.textContent = city[1];
    cityPhone.textContent = phone[1];
    cityAddress.textContent = address[1];
}