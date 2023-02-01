const acc = document.getElementsByClassName('button_block');
const butt_open = document.getElementsByClassName('button_open');
const price_arrow = document.getElementsByClassName('price_arrow');
const button_order = document.getElementsByClassName('button_order');
let open_button = 0;

for (let i = 0; i < acc.length; i++) {
    acc[i].onclick = () => {        
        if (!(i == open_button)) {
            butt_open[open_button].style.display = 'none';
            acc[open_button].style.background = '#EDF2EC';  
        }

        if (butt_open[i].style.display == 'block') {
            butt_open[i].style.display = 'none'; 
            acc[i].style.background = '#EDF2EC'; 
        }   else {
            butt_open[i].style.display = 'block';
            acc[i].style.background = '#D6E7D2';
            open_button = i;
        }  
        
        if (price_arrow[i].style.transform == 'rotate(180deg)') {
            price_arrow[i].style.transform = 'rotate(0deg)';
        } else if (price_arrow[i].style.transform = 'rotate(0deg)') {
            price_arrow[i].style.transform = 'rotate(180deg)';
        }
    }
        
    acc[i].onmouseenter = () =>{
        acc[i].style.background = '#D6E7D2';
    }

    acc[i].onmouseleave = () => {
        if (butt_open[i].style.display != 'block') {
          acc[i].style.background = '#EDF2EC';    
        }     
    }  
}