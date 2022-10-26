const sections = document.querySelectorAll("section");

const homeIcon = document.querySelector("#homeIcon");
const aboutMeIcon = document.querySelector("#aboutMeIcon");
const contactIcon = document.querySelector("#contactIcon");
const projectsIcon = document.querySelector("#projectsIcon");

const options = {
    root: null,
    threshold: 0,
    rootMargin: "-75% -0% -24% -0%"
};

const observer = new IntersectionObserver(function(entries, observer) 
{
    entries.forEach(entry => 
        {
            if(!entry.isIntersecting){
                switch(entry.target.id){
                    case "Home":
                        homeIcon.classList.add('hideText');
                        homeIcon.classList.remove('hideImg');
                        break;
                    case "Projects":
                        projectsIcon.classList.add('hideText');
                        projectsIcon.classList.remove('hideImg');
                        break;
                    case "AboutMe":
                        aboutMeIcon.classList.add('hideText');
                        aboutMeIcon.classList.remove('hideImg');
                        break;
                    case "Contact":
                        contactIcon.classList.add('hideText');
                        contactIcon.classList.remove('hideImg');
                        break;
                }
            }
            else{
                switch(entry.target.id){
                    case "Home":
                        homeIcon.classList.remove('hideText');
                        homeIcon.classList.add('hideImg');
                        break;
                    case "Projects":
                        projectsIcon.classList.remove('hideText');
                        projectsIcon.classList.add('hideImg');
                        break;
                    case "AboutMe":
                        aboutMeIcon.classList.remove('hideText');
                        aboutMeIcon.classList.add('hideImg');
                        break;
                    case "Contact":
                        contactIcon.classList.remove('hideText');
                        contactIcon.classList.add('hideImg');
                        break;
                }
            }
        });
}, options);

sections.forEach(section=>{
    observer.observe(section)
})