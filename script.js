document.addEventListener('DOMContentLoaded', function () {
    const leftEye = document.getElementById('left-eye');
    const rightEye = document.getElementById('right-eye');
    const leftPupil = document.querySelector('#left-eye .pupil');
    const rightPupil = document.querySelector('#right-eye .pupil');

    window.addEventListener('mousemove', function (event) {
        const x = (event.clientX / window.innerWidth) * 40 - 20;
        const y = (event.clientY / window.innerHeight) * 20 - 10;

        // Eye movement
        const eyeMovementX = x / 1;
        const eyeMovementY = y / 1;

        leftEye.style.transform = `translate(${25 + eyeMovementX}px, ${25 + eyeMovementY}px)`;
        rightEye.style.transform = `translate(${25 + eyeMovementX}px, ${25 + eyeMovementY}px)`;

        // Pupil movement
        const pupilMovementX = x / 2;
        const pupilMovementY = y / 2;

        leftPupil.style.transform = `translate(-50%, -50%) translate(${pupilMovementX}px, ${pupilMovementY}px)`;
        rightPupil.style.transform = `translate(-50%, -50%) translate(${pupilMovementX}px, ${pupilMovementY}px)`;
    });

    // Reset eye position when mouse leaves window
    window.addEventListener('mouseleave', function () {
        leftEye.style.transform = 'translate(25px, 25px)';
        rightEye.style.transform = 'translate(25px, 25px)';
        leftPupil.style.transform = 'translate(-50%, -50%)';
        rightPupil.style.transform = 'translate(-50%, -50%)';
    });
});
