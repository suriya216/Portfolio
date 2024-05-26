document.addEventListener("DOMContentLoaded", function() {
    const text = "I build things for the web.";
    const descContent = document.querySelector('.desc_content');

    function typeWriter(text, element, delay = 450) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, delay);
            } else {
                element.classList.remove('typing-effect');
            }
        }
        element.classList.add('typing-effect');
        type();
    }

    typeWriter(text, descContent);
});
