document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");
    var modalImage = document.getElementById("modalImage");
  
    // Mostrar el modal
    modal.style.display = "flex";
  
    // Obtener las dimensiones de la imagen
    var imageWidth = modalImage.width;
    var imageHeight = modalImage.height;
  
    // Establecer el tamaño del modal según las dimensiones de la imagen
    modalContent.style.width = imageWidth + "px";
    modalContent.style.height = imageHeight + "px";
  });
  
