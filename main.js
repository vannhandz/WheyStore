
const urlwhey = 'http://localhost:3000/whey';
const urltangsm = 'http://localhost:3000/tangsm';
const urlvitamin = 'http://localhost:3000/vitamin';
let id = ' ';
const addModalForm = document.querySelector('.form-product');
const editModalForm = document.querySelector('#edit_roduct .form-product');


function renderwhey(whey) {
  const tablewhey = document.querySelector('#tbl');
  const output = `<tr data-id='${whey.id}'>
    <td>${whey.name}</td>
    <td>
      <img src="${whey.img}" style="width: 70px; height: 70px;">
    </td>
    <td>${whey.price}</td>
    <td>${whey.quantity}</td>
    <td><span>${whey.detail}</span></td>
    <td><button class='edit-btn' (${whey.id})>Edit</button></td>
    <td><button class='delete-btn' ${whey.id}>Delete</button></td>
  </tr>`;
  tablewhey.insertAdjacentHTML('beforeend', output);
  // deletewhey
  const btlDelwhey = document.querySelector(`[data-id ='${whey.id}'] .delete-btn`);
  btlDelwhey.addEventListener('click', (e) => {
    fetch(`${urlwhey}/${whey.id}`, {
      method: 'Delete',
    })
      .then(res => res.json())
      .then(() => location.reload());
  })
  // editwhey
  const btnEditwhey = document.querySelector(`[data-id ='${whey.id}'] .edit-btn`);

  btnEditwhey.addEventListener('click', (e) => {
    e.preventDefault();
    $("#edit_roduct").modal('show');
    id = whey.id;
    editModalForm.name.value = whey.name;
    editModalForm.price.value = whey.price;
    editModalForm.quantity.value = whey.quantity;
    editModalForm.detail.value = whey.detail;
  })

}

function Whey() {
  const tablewhey = document.querySelector('#tbl');
  tablewhey.innerHTML = ''; // Xóa nội dung bảng trước khi thêm dữ liệu mới
  fetch(urlwhey)
    .then(res => res.json())
    .then(data => {
      data.forEach(whey => {
        renderwhey(whey);
      });
    });


    editModalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      fetch(`${urlwhey}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: editModalForm.name.value,
          price: editModalForm.price.value,
          quantity: editModalForm.quantity.value,
          detail: editModalForm.detail.value,
        })
      })
        .then(res => res.json())
        .then(() => {
          location.reload();
          editModalForm.name.value = '';
          editModalForm.price.value = '';
          editModalForm.quantity.value = '';
          editModalForm.detail.value = '';
        });
    });
  
}

function rendertangsm(tangsm) {
  const tabletangsm = document.querySelector('#tbl');
  const output = `<tr data-id='${tangsm.id}'>
    <td>${tangsm.name}</td>
    <td>
      <img src="${tangsm.img}" style="width: 70px; height: 70px;">
    </td>
    <td>${tangsm.price}</td>
    <td>${tangsm.quantity}</td>
    <td><span>${tangsm.detail}</span></td>
    <td><button class='edit-btn' ${tangsm.id}>Edit</button></td>
    <td><button class='delete-btn'${tangsm.id}>Delete</button></td>
  </tr>`;
  tabletangsm.insertAdjacentHTML('beforeend', output);
  // delete tangsm
  const btlDeltangsm = document.querySelector(`[data-id ='${tangsm.id}'] .delete-btn`);
  btlDeltangsm.addEventListener('click', (e) => {
    fetch(`${urltangsm}/${tangsm.id}`, {
      method: 'Delete',
    })
      .then(res => res.json())
      .then(() => location.reload());
  })
  //edit tangsm
  const btnEdittangsm = document.querySelector(`[data-id ='${tangsm.id}'] .edit-btn`);
  btnEdittangsm.addEventListener('click', (e) => {
    e.preventDefault();
    $("#edit_roduct").modal('show');
    id = tangsm.id;
    editModalForm.name.value = tangsm.name;
    editModalForm.price.value = tangsm.price;
    editModalForm.quantity.value = tangsm.quantity;
    editModalForm.detail.value = tangsm.detail;

  })


}
function TangSM() {
  const tabletangsm = document.querySelector('#tbl');
  tabletangsm.innerHTML = ''; // Xóa nội dung bảng trước khi thêm dữ liệu mới
  fetch(urltangsm)
    .then(res => res.json())
    .then(data => {
      data.forEach(tangsm => {
        rendertangsm(tangsm);
      });
    });

    editModalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      fetch(`${urltangsm}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: editModalForm.name.value,
          price: editModalForm.price.value,
          quantity: editModalForm.quantity.value,
          detail: editModalForm.detail.value,
        })
      })
        .then(res => res.json())
        .then(() => {
          location.reload();
          editModalForm.name.value = '';
          editModalForm.price.value = '';
          editModalForm.quantity.value = '';
          editModalForm.detail.value = '';
        });
    });

}


function rendervitamin(vitamin) {
  const tablevitamin = document.querySelector('#tbl');
  const output = `<tr data-id='${vitamin.id}'>
    <td>${vitamin.name}</td>
    <td>
      <img src="${vitamin.img}" style="width: 70px; height: 70px;">
    </td>
    <td>${vitamin.price}</td>
    <td>${vitamin.quantity}</td>
    <td><span>${vitamin.detail}</span></td>
    <td><button class='edit-btn' ${vitamin.id}>Edit</button></td>
    <td><button class='delete-btn'${vitamin.id}>Delete</button></td>
  </tr>`;
  tablevitamin.insertAdjacentHTML('beforeend', output);
  // delete tangsm
  const btlDelvitamin = document.querySelector(`[data-id ='${vitamin.id}'] .delete-btn`);
  btlDelvitamin.addEventListener('click', (e) => {
    fetch(`${urlvitamin}/${vitamin.id}`, {
      method: 'Delete',
    })
      .then(res => res.json())
      .then(() => location.reload());
  })
  //edit vitamin
  const btnEditvitamin = document.querySelector(`[data-id ='${vitamin.id}'] .edit-btn`);
  btnEditvitamin.addEventListener('click', (e) => {
    e.preventDefault();
    $("#edit_roduct").modal('show');
    id = vitamin.id;
    editModalForm.name.value = vitamin.name;
    editModalForm.price.value = vitamin.price;
    editModalForm.quantity.value = vitamin.quantity;
    editModalForm.detail.value = vitamin.detail;

  })


}
function Vitamin() {
  const tablevitamin = document.querySelector('#tbl');
  tablevitamin.innerHTML = ''; // Xóa nội dung bảng trước khi thêm dữ liệu mới
  fetch(urlvitamin)
    .then(res => res.json())
    .then(data => {
      data.forEach(vitamin => {
        rendervitamin(vitamin);
      });
    });

    editModalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      fetch(`${urlvitamin}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: editModalForm.name.value,
          price: editModalForm.price.value,
          quantity: editModalForm.quantity.value,
          detail: editModalForm.detail.value,
        })
      })
        .then(res => res.json())
        .then(() => {
          location.reload();
          editModalForm.name.value = '';
          editModalForm.price.value = '';
          editModalForm.quantity.value = '';
          editModalForm.detail.value = '';
        });
    });

}



const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  filterProducts(searchTerm);
});


function filterProducts(searchTerm) {
  const tablewhey = document.querySelector('#tbl');
  tablewhey.innerHTML = ''; // Xóa nội dung bảng trước khi thêm dữ liệu mới

  fetch(urlwhey)
    .then(res => res.json())
    .then(data => {
      const filteredData = data.filter(whey =>
        whey.name.toLowerCase().includes(searchTerm)
      );
      filteredData.forEach(whey => {
        renderwhey(whey);
      });
    });

  const tabletangsm = document.querySelector('#tbl');
  tabletangsm.innerHTML = ''; // Xóa nội dung bảng trước khi thêm dữ liệu mới

  fetch(urltangsm)
    .then(res => res.json())
    .then(data => {
      const filteredData = data.filter(tangsm =>
        tangsm.name.toLowerCase().includes(searchTerm)
      );
      filteredData.forEach(tangsm => {
        rendertangsm(tangsm);
      });
    });

  const tablevitamin = document.querySelector('#tbl');
  tablevitamin.innerHTML = ''; // Xóa nội dung bảng trước khi thêm dữ liệu mới

  fetch(urlvitamin)
    .then(res => res.json())
    .then(data => {
      const filteredData = data.filter(vitamin =>
        vitamin.name.toLowerCase().includes(searchTerm)
      );
      filteredData.forEach(vitamin => {
        rendervitamin(vitamin);
      });
    });
}



addModalForm.addEventListener('submit',(e) => {
  e.preventDefault();
  const productType = document.querySelector('input[name="product"]:checked').value;

  let url = '';
  if (productType === 'whey') {
      url = urlwhey;
  } else if (productType === 'tangsm') {
      url = urltangsm;
  }
  else if (productType === 'vitamin') {
    url = urlvitamin;
  }

  fetch(url,{
      method: 'POST',
      headers:{
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          name: addModalForm.name.value,
          img: addModalForm.img.value, 
          price: addModalForm.price.value,
          quantity: addModalForm.quantity.value,
          detail: addModalForm.detail.value,      
      })
  })
  .then(res => res.json())
  .then(data=>{
      const dataArr=[];
      dataArr.push(data);
      renderUsers(dataArr);
  })
  .catch(error => console.error('Error:', error));

  // Reset form fields
  addModalForm.name.value = '';
  addModalForm.img.value = '';
  addModalForm.price.value = '';
  addModalForm.quantity.value = '';
  addModalForm.detail.value = '';
});





// function displayAllProducts() {
//   const tablewhey = document.querySelector('#tbl');
//   tablewhey.innerHTML = '';
//   Whey(); // Hiển thị danh sách sản phẩm thức ăn
//   TangSM(); // Hiển thị danh sách sản phẩm đồ uống
//   Vitamin();
// }