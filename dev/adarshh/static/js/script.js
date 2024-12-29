const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
    })
});
    
const hiddenElements =document.querySelectorAll('.heading');
hiddenElements.forEach((el) => observer.observe(el));


////////////////////////// fadding animation


document.addEventListener('DOMContentLoaded', function () {
    function handleScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width');
                progressBar.style.setProperty('--width', width);
                progressBar.classList.add('animate');
                observer.unobserve(progressBar); // Stop observing after animation
            }
        });
    }

    const observer = new IntersectionObserver(handleScroll, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    });

    // Select all progress bars and observe them
    document.querySelectorAll('.progress-bar').forEach(bar => {
        observer.observe(bar);
    });
});



//////////////////////////// progressBar animation


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top <offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav a [href*=' +  id + ']').classList.add('active');
            })
        }
    })
}