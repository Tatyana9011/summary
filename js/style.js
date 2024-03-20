
const imgCertificat = document.querySelector("#img1");

const openModal = () => {
    
    const modal = document.querySelector('.modal'),
        modalOverlay = document.querySelector('.modal-overlay'),
        modalImg=document.querySelector('#modal_content'),
        scrollTop = document.documentElement.scrollTop,
        modalClose = document.querySelector('.close');

        modalImg.style.top = scrollTop + 'px';
    const escapeHandler = event => {
        if (event.code === 'Escape') {
        closeModal();
        }
    };

    const openModalStart = () => {
        modal.style.display = 'block';
        modalOverlay.style.display = 'block';
        document.addEventListener('keydown', escapeHandler);
    };
    openModalStart();
    
    const closeModal = () => {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
        document.removeEventListener('keydown', escapeHandler);
    };

     modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

}

imgCertificat.addEventListener("click", ()=>{
    openModal()
})

/*

const canvas = document.getElementById("canvas");



let widthCanvas = canvas.width;
let heightCanvas = canvas.height;
let imageCriet = new SimpleImage("../img/photo.JPG");

imageCriet.setSize(widthCanvas, heightCanvas)

for (let pixel of imageCriet.values()){
    let avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/2;
    pixel.setRed(avg );
    pixel.setGreen(avg )
    pixel.setBlue(avg );
  }


imageCriet.drawTo(canvas)

*/