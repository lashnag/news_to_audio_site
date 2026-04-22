document.addEventListener('DOMContentLoaded', function () {

    // FAQ Toggle
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
        });
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const womanAudio = document.getElementById("woman-sample");
    const womanButton = document.getElementById("woman-button");
    const manAudio = document.getElementById("man-sample");
    const manButton = document.getElementById("man-button");
    const exampleAudio = document.getElementById("example-sample");
    const exampleButton = document.getElementById("example-button");

    const defaultWomanButtonContent = womanButton.textContent;
    const defaultManBtnContent = manButton.textContent;
    const defaultExampleBtnContent = exampleButton.textContent;
    const pauseLabel = womanButton.dataset.pause || "Pause";
    const stopLabel = exampleButton.dataset.stop || "Stop ⏹";

    exampleButton.addEventListener("click", function () {
        if (exampleAudio.paused) {
            exampleAudio.play();
            exampleButton.textContent = stopLabel;

            manAudio.pause();
            womanAudio.pause();
            manButton.textContent = defaultManBtnContent;
            manButton.classList.remove('play-btn-active');
            womanButton.textContent = defaultWomanButtonContent;
            womanButton.classList.remove('play-btn-active');
        } else {
            exampleAudio.pause();
            exampleButton.textContent = defaultExampleBtnContent;
        }
    });

    womanButton.addEventListener("click", function () {
        if (womanAudio.paused) {
            womanButton.classList.add('play-btn-active');
            womanAudio.play();
            womanButton.textContent = pauseLabel;

            manAudio.pause();
            exampleAudio.pause();
            manButton.textContent = defaultManBtnContent;
            exampleButton.textContent = defaultExampleBtnContent;
            manButton.classList.remove('play-btn-active');
        } else {
            womanAudio.pause();
            womanButton.classList.remove('play-btn-active');
            womanButton.textContent = defaultWomanButtonContent;
        }
    });

    manButton.addEventListener("click", function () {
        if (manAudio.paused) {
            manAudio.play();

            womanAudio.pause();
            manButton.classList.add('play-btn-active');
            womanButton.classList.remove('play-btn-active');
            exampleButton.textContent = defaultExampleBtnContent;
            exampleAudio.pause();

            manButton.textContent = pauseLabel;
            womanButton.textContent = defaultWomanButtonContent;
        } else {
            manAudio.pause();
            manButton.classList.remove('play-btn-active');
            manButton.textContent = defaultManBtnContent;
        }
    });

});