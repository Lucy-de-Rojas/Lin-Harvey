console.clear();

let url = window.location.href;
let page;
let colorHighlight = 'purple';


function pageStyle() {
        page.style.backgroundColor = colorHighlight;
        page.style.color = 'yellow';
        page.style.fontWeight = '900';
};




function handlePageLoad (targets) {
        anime({
                targets: targets,
                scale: {
                        value: 1.18,
                        duration: 1000,
                        delay: 500,
                        direction: 'alternate',
                        loop: false,
                        easing: 'easeInOutSine',

                },

        });
}




// if home page:
if(url.includes('index')) {
        page = document.getElementById("home");
        pageStyle();
        handlePageLoad('#home')


}

// if about page:
else if (url.includes('about')) {
        page = document.getElementById("about");
        pageStyle();
        handlePageLoad("#about")

}

// if contact page:
else if (url.includes('contact')){
        page = document.getElementById("contact");
        pageStyle();
        handlePageLoad('#contact')

}

// if gex page:
else if (url.includes('reduce-plastic')) {
        page = document.getElementById("about");
        page.style.backgroundColor = 'pink';
        page.style.color = colorHighlight;

        handlePageLoad('#about')

}



