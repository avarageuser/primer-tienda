let currentImage = 1;

$('#next').click(function() {
 if (currentImage < 3) {
    currentImage++;
 }
 updateImage();
});

$('#prev').click(function() {
 if (currentImage > 1) {
    currentImage--;
 }
 updateImage();
});

function updateImage() {
 $('#image-container img').hide();
 $('#img' + currentImage).show();
}

function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var span = document.getElementsByClassName("close")[0];
    
    modal.style.display = "block";
    modalImg.src = img.src;
    
    span.onclick = function() { 
        modal.style.display = "none";
    }
}
