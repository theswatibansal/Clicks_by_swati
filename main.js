const images = [
    "img/h1.jpeg",
    "img/h2.jpg",
    "img/w2.jpg",
    "img/p2.jpg",
    "img/w1.jpg",
    "img/h12.jpg",
    "img/p3.jpg",
    "img/w3.jpg"
  ];
  
  // Function to create gallery items and add them to the DOM
  function createGallery() {
    const gallery = document.getElementById("gallery");
  
    images.forEach(image => {
      const col = document.createElement("div");
      col.classList.add("col-6", "col-md-4", "col-lg-3", "gallery-item");
  
      const img = document.createElement("img");
      img.src = image;
  
      col.appendChild(img);
      gallery.appendChild(col);
    });
  }

  
  
  // Create the gallery when the page loads
  document.addEventListener("DOMContentLoaded", createGallery);

  const gallery = document.querySelector(".gallery__flex");

Array.from(gallery.children).forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  gallery.appendChild(duplicateNode);
});

  