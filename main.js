document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.page');

    document.addEventListener('mouseleave', function() {
        customCursor.style.display = 'none';
    });

    document.addEventListener('mouseout', function() {
        customCursor.style.opacity = '0';
    });

    function fadeIn() {
        this.classList.add('fade-in');
        this.classList.remove('fade-out');
    }

    function fadeOut() {
        this.classList.add('fade-out');
        this.classList.remove('fade-in');
    }

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseover', fadeIn);
        elements[i].addEventListener('mouseout', fadeOut);
    }

});