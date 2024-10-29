function displayLastProduct() {
    // Lấy danh sách sản phẩm từ local storage 'detailprd'
    var detailprd = JSON.parse(localStorage.getItem('detailprd')) || [];

    // Kiểm tra nếu có ít nhất một sản phẩm trong giỏ hàng
    if (detailprd.length > 0) {
        // Lấy sản phẩm cuối cùng trong danh sách
        var lastProduct = detailprd[detailprd.length - 1];

        // Lấy thông tin sản phẩm
        var productName = lastProduct.name;
        var productPrice = lastProduct.price;
        var productImage = lastProduct.img;

        // Hiển thị thông tin sản phẩm
        var itemDiv = document.querySelector('.item');
        if (itemDiv) {
            var imgElement = document.createElement('img');
            imgElement.src = productImage;
            imgElement.width = '600'; // Thiết lập chiều rộng của hình ảnh
            imgElement.height = '500';
            itemDiv.appendChild(imgElement);
        }

        // Hiển thị tên sản phẩm
        var productNameElement = document.querySelector('.product-name');
        if (productNameElement) {
            productNameElement.textContent = productName;
        }

        // Hiển thị giá sản phẩm
        var productPriceElement = document.querySelector('.product-price-discount');
        if (productPriceElement) {
            productPriceElement.textContent = productPrice + ' $';
        }
    }
}

// Gọi hàm displayLastProduct() để hiển thị thông tin sản phẩm sau cùng từ 'detailprd'
displayLastProduct();

function addToCartAndClearDetails() {
    // Lấy danh sách sản phẩm từ local storage 'detailprd'
    var detailprd = JSON.parse(localStorage.getItem('detailprd')) || [];

    // Kiểm tra nếu có ít nhất một sản phẩm trong giỏ hàng
    if (detailprd.length > 0) {
        // Lấy sản phẩm cuối cùng trong danh sách
        var lastProduct = detailprd[detailprd.length - 1];

        // Lấy danh sách sản phẩm từ local storage 'cartItems'
        var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Thêm sản phẩm cuối cùng từ 'detailprd' vào 'cartItems'
        cartItems.push(lastProduct);

        // Cập nhật local storage 'cartItems'
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Xóa tất cả sản phẩm từ 'detailprd'
        localStorage.removeItem('detailprd');

        localStorage.setItem('detailprd', JSON.stringify(detailprd));
        alert('Sản phẩm đã được thêm vào giỏ hàng!')


    }
}
// Lắng nghe sự kiện click trên nút "Mua Ngay"
var buyNowButton = document.querySelector('.round-black-btn');
if (buyNowButton) {
    buyNowButton.addEventListener('click', addToCartAndClearDetails);
}

function goBack() {
    window.history.back();
  }