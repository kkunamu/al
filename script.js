function openEnvelope() {
    document.querySelector('.flap').style.transform = 'rotateY(180deg)';
    document.querySelector('.letter').style.opacity = '1';
    document.querySelector('.letter').style.transform = 'translateY(-30px)';

    // Just fade in the images (no movement)
    let images = document.querySelectorAll('.polaroid');
    images.forEach((img) => {
        img.style.opacity = '1';
    });
}
    