(function imageGallery(){

    // DOM Element store
    DOMelements = {
        image: ".gallery-image",
        leftArrow: ".left",
        rightArrow: ".right"
    }
    // Image store
    const imageStore = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];

    // Current image number
    let currentImageNum = 0;

    // Current Image
    let currentImage = `media/${imageStore[currentImageNum]}`;

    // Set a starting image when the browser loads
    document.addEventListener("DOMContentLoaded", e => {
        document.querySelector(DOMelements.image).src = currentImage;
    });

    // Right arrow functionality
    document.querySelector(DOMelements.rightArrow).addEventListener("mouseup", e => {
            e.preventDefault();

            // Store image element in variable
            const image = document.querySelector(DOMelements.image);

        if(currentImageNum === 3){
            
            setTimeout(function(){ 
                image.className = "gallery-image animation";

                currentImageNum = 0;
                image.src = `media/${imageStore[0]}`;
            }, 100);

            image.className = "gallery-image";

        } else {

            setTimeout(function(){ 
                image.className = "gallery-image animation";

                currentImageNum  += 1;
                image.src = `media/${imageStore[currentImageNum]}`;
            }, 100);
            
            image.className = "gallery-image";
        }

        
    })

    // Left Arrow functionality
    document.querySelector(DOMelements.leftArrow).addEventListener("mouseup", e => {
        e.preventDefault();

        // Store image element in a variable
        const image = document.querySelector(DOMelements.image);
    
    if(currentImageNum === 0){
        

        setTimeout(function(){ 
            image.className = "gallery-image animation";

            currentImageNum = 3;
            image.src = `media/${imageStore[currentImageNum]}`;
        }, 100);
        
        image.className = "gallery-image";

    } else {
        
        setTimeout(function(){ 
            image.className = "gallery-image animation";

            currentImageNum  -= 1;
            image.src = `media/${imageStore[currentImageNum]}`;
        }, 100);
        
        image.className = "gallery-image";
        
    }
    
    
})

})();