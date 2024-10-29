/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });


  /*========== sticky navbar ==========*/
  let header = document.querySelector('.header');

  header.classList.toggle('sticky', window.scrollY > 100);


  /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/
const sr = ScrollReveal();
// Hiệu ứng cuộn cho mục "WHEY PROTEIN"
sr.reveal('#loadwhey .services-container > *', {
  duration: 1000,
  distance: '50px',
  origin: 'bottom',
  interval: 200
});

// Hiệu ứng cuộn cho mục "TĂNG SỨC MẠNH"
sr.reveal('#loadTangSm .services-container > *', {
  duration: 1000,
  distance: '50px',
  origin: 'bottom',
  interval: 200
});

// Hiệu ứng cuộn cho mục "VITAMIN - D3&K2 - DẦU CÁ"
sr.reveal('#loadVitamin .services-container > *', {
  duration: 1000,
  distance: '50px',
  origin: 'bottom',
  interval: 200
});

const leftBtn = document.querySelector('.scroll-left');
const rightBtn = document.querySelector('.scroll-right');
const servicesContainer = document.querySelector('.services-container');

leftBtn.addEventListener('click', () => {
  servicesContainer.scrollBy({
    left: -servicesContainer.offsetWidth,
    behavior: 'smooth'
  });
});

rightBtn.addEventListener('click', () => {
  servicesContainer.scrollBy({
    left: servicesContainer.offsetWidth,
    behavior: 'smooth'
  });
});


fetch('http://localhost:3000/whey')
  .then(response => response.json())
  .then(data => {
    const whey = data
    showwhey(data)
  })
function showwhey(data) {
  let loadwhey = document.getElementById('loadwhey');
  let kq = "";
  data.forEach(item => {
    kq += `<div class="services-box">
                <div class="product">       
                    <p>  <img src="${item.img}" style="width: 270px; height: 200px;"></p>      
                    <h2 class="product-name">${item.name}</h2>
                    <p class="product-discount-price">Giá khuyến mãi:  ${item.price}$</p>
                    <p class="product-price">Giá: 1.000$</p>
                    <p class="product-discount-percentage">Giảm giá: 25%</p>
                </div> 
                <a style="text-decoration: none" href="detail.html" onclick="productDetail('${item.img}', '${item.name}', '${item.price}')" class="btn">Xem Ngay</a>
            </div>
             `
  });
  loadwhey.innerHTML = kq

}

fetch('http://localhost:3000/tangsm')
  .then(response => response.json())
  .then(data => {
    const tangsm = data
    showTangsm(data)
  })
function showTangsm(data) {
  let loadtangsm = document.getElementById('loadTangSm');
  let kq = "";
  data.forEach(item => {
    kq += `<div class="services-box">
        <div class="product">       
            <p>  <img src="${item.img}" style="width: 270px; height: 200px;"></p>      
            <h2 class="product-name">${item.name}</h2>
            <p class="product-discount-price">Giá khuyến mãi:  ${item.price}$</p>
            <p class="product-price">Giá: 1.000$</p>
            <p class="product-discount-percentage">Giảm giá: 90%</p>
        </div> 
        <a style="text-decoration: none" href="detail.html" onclick="productDetail('${item.img}', '${item.name}', '${item.price}')" class="btn">Xem Ngay</a>
    </div>
     `
  });
  loadtangsm.innerHTML = kq


}



fetch('http://localhost:3000/vitamin')
  .then(response => response.json())
  .then(data => {
    const vitamin = data
    showVitamin(data)
  })
function showVitamin(data) {
  let loadvitamin = document.getElementById('loadVitamin');
  let kq = "";
  data.forEach(item => {
    kq += `<div class="services-box">
                <div class="product">       
                    <p>  <img src="${item.img}" style="width: 270px; height: 200px;"></p>      
                    <h2 class="product-name">${item.name}</h2>
                    <p class="product-discount-price">Giá khuyến mãi:  ${item.price}$</p>
                    <p class="product-price">Giá: 1.000$</p>
                    <p class="product-discount-percentage">Giảm giá: 25%</p>
                </div> 
                <a style="text-decoration: none" href="detail.html" onclick="productDetail('${item.img}', '${item.name}', '${item.price}')" class="btn">Xem Ngay</a>
            </div>
             `
  });
  loadvitamin.innerHTML = kq
}


// loggin

$(document).ready(function () {
  $("#login-toggle-btn").on("click", function () {
    $("#login-dialog").modal("show");
    $("#register-dialog").modal("hide"); // Ẩn hộp thoại đăng ký nếu đang hiển thị
  });
  $("#register-toggle-btn").on("click", function () {
    $("#register-dialog").modal("show");
    $("#login-dialog").modal("hide"); // Ẩn hộp thoại đăng nhập nếu đang hiển thị
  });
});



//xử lý login 

let apiUser = 'http://localhost:3000/user';
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emaildk = document.querySelector("#emaildk");
const passworddk = document.querySelector("#passworddk");
const fullname = document.querySelector("#name");
const bntLogin = document.querySelector("#dangnhap_home");
const bntSignup = document.querySelector("#dangki_home");

const getUser = async () => {
  const response = await fetch(apiUser);
  const data = await response.json();
  return data;
};

// login
bntLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value == "" || password.value == "") {
    alert("Please enter your username and password");
  } else {
    getUser().then((data) => {
      const user = data.find(
        (user) =>
          user.email == email.value && user.password == password.value
      );
      if (user) {
        alert("Login success");
        window.location.reload();
        //   window.location.href = "todolist.html";
      } else {
        alert("Login failed");
      }
    });
  }
});

bntSignup.addEventListener("click", (e) => {
  e.preventDefault();
  if (emaildk.value == "" || passworddk.value == "" || fullname.value == "") {
    alert("Please enter your username and password");
  } else {
    const user = {
      name: fullname.value,
      email: emaildk.value,
      password: passworddk.value,
    };
    fetch(apiUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
      alert("Đăng kí thành công");
      window.location.reload();
  }
});




function addToCart(img,name, price) {
  // Lấy danh sách sản phẩm trong giỏ hàng từ local storage (nếu có)
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Tạo một đối tượng mới đại diện cho sản phẩm được thêm vào giỏ hàng
  var newItem = {
    img:img,
    name: name,
    price: price,
    quantity:1
  };

  // Thêm sản phẩm vào danh sách giỏ hàng
  cartItems.push(newItem);

  // Cập nhật local storage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Xác nhận thành công
  alert('Sản phẩm đã được thêm vào giỏ hàng!');

  // Cập nhật số lượng sản phẩm trong giỏ hàng trên giao diện người dùng (tùy thuộc vào thiết kế của bạn)
  updateCartItemCount(cartItems.length);
}

function updateCartItemCount(count) {
  // Cập nhật số lượng sản phẩm trong giỏ hàng trên giao diện người dùng (ví dụ: đặt giá trị vào một thẻ span có id là "cartItemCount")
  document.getElementById('cartItemCount').textContent = count;
}




function productDetail(img,name, price) {
  // Lấy danh sách sản phẩm trong giỏ hàng từ local storage (nếu có)
  var detailprd = JSON.parse(localStorage.getItem('detailprd')) || [];

  // Tạo một đối tượng mới đại diện cho sản phẩm được thêm vào giỏ hàng
  var newItem = {
    img:img,
    name: name,
    price: price,
    quantity: 1
  };

  // Thêm sản phẩm vào danh sách giỏ hàng
  detailprd.push(newItem);

  // Cập nhật local storage
  localStorage.setItem('detailprd', JSON.stringify(detailprd));

}




ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });