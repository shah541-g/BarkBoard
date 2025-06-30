
function switch_mode(){
    let isChecked = true;
    let theme_mode = document.getElementById('theme-mode');
    const mode_text = document.getElementById('mode-type');
    theme_mode.addEventListener('click',()=>{
        isChecked=!isChecked;
        if(!isChecked){
            // console.log("change to light theme")
            mode_text.innerText = "Light Theme"
            const root = document.documentElement;
            root.style.setProperty("--body-color","white");
            root.style.setProperty("--card-bg-color","white");
            root.style.setProperty("--nav-color","black");
            document.body.style.color = 'white';
            const cards = document.getElementsByClassName('card');

            for (let card of cards){
                card.style.border = '2px solid black'
            }

            const dog_details = document.getElementsByClassName('dog-details');
            for (let element of dog_details){
                element.style.color = 'black';
            }  
        }
        else{
            // console.log("remain night theme")
            mode_text.innerText = "Night Theme"
            const root = document.documentElement;
            root.style.setProperty("--body-color","#1F1D2B");
            root.style.setProperty("--card-bg-color","#242f3f");
            root.style.setProperty("--nav-color","#242730");
            document.body.style.color = 'white';

            const cards = document.getElementsByClassName('card');

            for (let card of cards){
                card.style.border = 'none'
            }

            const dog_details = document.getElementsByClassName('dog-details');
            for (let element of dog_details){
                element.style.color = 'white';
            } 

        }
    })
}
function toggleSideBar(){

    const chevronBtn = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');

    let sidebarIsReleased = false;
    chevronBtn.addEventListener('click', () => {
        
        sidebar.classList.toggle('is-open');
    
        
    });
}



switch_mode()
toggleSideBar()


