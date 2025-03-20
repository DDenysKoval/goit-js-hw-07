const categorie = document.querySelectorAll(".item");
console.log(`Number of categories: ${categorie.length}`);

categorie.forEach((category) => {
    const categorieHeader = category.querySelector("h2");
    console.log(`Category: ${categorieHeader.textContent}`);
    
    const categorieItem = category.querySelectorAll("ul li");
    console.log(`Elements: ${categorieItem.length}`);
});

