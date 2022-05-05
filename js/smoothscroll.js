const links = document.querySelectorAll('.header__link')
links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        const section = document.querySelector(link.getAttribute('href'))
        if (section) {
            section.scrollIntoView({
                block: 'center',
                behavior: 'smooth'
            })
            seamless.scrollIntoView(section, {
                behavior: "smooth",
                block: "start",
                inline: "center",
            });
        }
    })
})