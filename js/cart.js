function displayCartItems() {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var tableBody = document.getElementById('listI');
    tableBody.innerHTML = '';
  
    cartItems.forEach(item => {
        var row = document.createElement('tr');
    
        var removeCell = document.createElement('td');
        var removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.addEventListener('click', function() {
            removeFromCart(item.name);
        });
        removeCell.appendChild(removeButton);
        row.appendChild(removeCell);
    
        var thumbnailCell = document.createElement('td');
        var thumbnailImage = document.createElement('img');
        thumbnailImage.src = item.img;
        thumbnailImage.style.width = '50px';
        thumbnailImage.style.height = '50px';
        thumbnailCell.appendChild(thumbnailImage);
        row.appendChild(thumbnailCell);
    
        var nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        row.appendChild(nameCell);
    
        var priceCell = document.createElement('td');
        priceCell.textContent = item.price +' $';
        row.appendChild(priceCell);
    
        var quantityCell = document.createElement('td');
        var quantityWrapper = document.createElement('div');
        quantityWrapper.style.display = 'flex';
        quantityWrapper.style.alignItems = 'center'; // Đảm bảo các thành phần nằm trung tâm theo chiều dọc

        var decreaseButton = document.createElement('button');
        decreaseButton.textContent = '-';
        decreaseButton.addEventListener('click', function() {
            decreaseQuantity(item.name);
        });
        quantityWrapper.appendChild(decreaseButton);
       
        var quantityInput = document.createElement('td');
        
        quantityInput.textContent = item.quantity;
        quantityInput.style.margin = '0 5px'; // Để tạo khoảng cách giữa ô nhập số lượng và nút cộng/trừ
        quantityInput.addEventListener('change', function() {
            updateQuantity(item.name, parseInt(quantityInput.value));
        });
        quantityWrapper.appendChild(quantityInput);

        var increaseButton = document.createElement('button');
        increaseButton.textContent = '+';
        increaseButton.addEventListener('click', function() {
            increaseQuantity(item.name);
        });
        quantityWrapper.appendChild(increaseButton);

        quantityCell.appendChild(quantityWrapper);
        row.appendChild(quantityCell);
    
        var subtotalCell = document.createElement('td');
        var subtotal = item.price * item.quantity;
        subtotalCell.textContent = subtotal+' $';
        row.appendChild(subtotalCell);
    
        tableBody.appendChild(row);
    });
}

function removeFromCart(name) {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var updatedCartItems = cartItems.filter(item => item.name !== name);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    displayCartItems();
    updateCartItemCount(updatedCartItems.length);
}

function updateQuantity(name, newQuantity) {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var updatedCartItems = cartItems.map(item => {
        if (item.name === name) {
            item.quantity = newQuantity;
        }
        return item;
    });
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    displayCartItems();
}

function increaseQuantity(name) {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var updatedCartItems = cartItems.map(item => {
        if (item.name === name) {
            item.quantity += 1;
        }
        return item;
    });
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    displayCartItems();
}

function decreaseQuantity(name) {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var updatedCartItems = cartItems.map(item => {
        if (item.name === name && item.quantity > 1) {
            item.quantity -= 1;
        }
        return item;
    }).filter(item => item.quantity !== 0);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    displayCartItems();
}

function goBack() {
    window.history.back();
  }

function clearCart() {
    localStorage.removeItem('cartItems');
    location.reload();
      alert("Đặt Hàng Thành Công");
  }

displayCartItems();
