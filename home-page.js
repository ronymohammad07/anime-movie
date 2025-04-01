// // when button click then menu show mobile device
// function MenuShow(){
//     const menu = document.getElementById('nav-section-two-ms')
//     const close = document.getElementById('close')

//     menu?.addEventListener('click',{
//         menu.style.display = 'flex'
//     })
//     menu.style.display='flex'
// }

function MenuShow() {
    const menu = document.getElementById('nav-section-two-ms');  // Menu element
    const menubutton = document.getElementById('menu');
    const close = document.getElementById('close');  // Close button


    // Check if the menu exists before adding an event listener
    if (menu) {
        // Show the menu when the button is clicked
        menu.style.display = 'flex';
        close.style.display = 'flex'
        menubutton.style.display = 'none'

    }

    // Hide the menu when the close button is clicked
    if (close) {
        close.addEventListener('click', () => {

            if (menu) {
                menu.style.display = 'none';  // Hide the menu

                close.style.display = 'none'
                menubutton.style.display = 'flex'
            }

        });
    }


}



