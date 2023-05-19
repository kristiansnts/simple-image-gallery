const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumbs');

container.addEventListener('click', function(e) {
    if( e.target.className == 'thumbs' ) {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(() => {
            jumbo.classList.remove('fade');
        }, 500);

        thumbs.forEach(t => {
            t.className = 'thumbs';
        })

        e.target.classList.add('active');
    }
})