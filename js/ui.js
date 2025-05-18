const uiElement = {
    mobileMenuBtn: document.querySelector(".mobile-menu-btn"),
    nav: document.querySelector("nav"),
    productWrapper: document.querySelector(".product-wrapper"),
};
const renderProducts = (products) => {
    // Dışarıdan verilen products dizisini dön ve bu dizinin her elemanı için bir html oluştur
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
        <img src="${product.image}" alt="product-card-image">
                <div class="info">
                        <h2>${product.name}</h2>
                        <h4>${product.category}</h4>
                        <p>$${product.price}</p>
                        <button class="btn">Sepete Ekle</button>
                </div>`;
        uiElement.productWrapper.appendChild(productCard);
    });
};
export { uiElement, renderProducts };