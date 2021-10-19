'use strict'
// ======= default data =======
const menu = document.querySelector("#menu");
const cart = document.querySelector("#cart");
const totalAmountBox = document.querySelector("#total-amount");
const submitButton = document.querySelector("#submit-button");

// 菜單資料
const productData = [
  {
    id: "product-1",
    imgUrl:
      "https://images.unsplash.com/photo-1558024920-b41e1887dc32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "馬卡龍",
    price: 90
  },
  {
    id: "product-2",
    imgUrl:
      "https://images.unsplash.com/photo-1560691023-ca1f295a5173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "草莓",
    price: 60
  },
  {
    id: "product-3",
    imgUrl:
      "https://images.unsplash.com/photo-1568271675068-f76a83a1e2d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "奶茶",
    price: 100
  },
  {
    id: "product-4",
    imgUrl:
      "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "冰咖啡",
    price: 180
  }
];
// ======= 請從這裡開始 =======
const totalAmountInitValue = '--'

function displayMenu (products) {
  let HTMLContent = ''

  products.forEach(product => {
    HTMLContent += `
      <div class="col-3">
        <div class="card">
          <img src="${product.imgUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.price}</p>
            <button class="btn btn-primary order-btn" id="${product.id}">加入購物車</button>
          </div>
        </div>
      </div>
    `
  })

  menu.innerHTML = HTMLContent
}

function orderFood (event) {
  const target = event.target
  if (!target.classList.contains('order-btn')) {
    return
  }

  let product = null
  for (const data of productData) {
    if (data.id === target.id) {
      product = data
      break
    }
  }

  const list = document.createElement('li')
  list.classList.add('list-group-item')
  list.textContent = `${product.name} X 1 小計：${product.price}`
  cart.appendChild(list)

  let totalAmount = totalAmountBox.textContent
  if (totalAmount === totalAmountInitValue) {
    totalAmount = 0
  } else {
    totalAmount = Number(totalAmount)
  }
  totalAmountBox.textContent = totalAmount + product.price
}

function checkout (event) {
  const alertMessage = `感謝購買\n總金額：${totalAmountBox.textContent}`

  alert(alertMessage)
  totalAmountBox.textContent = totalAmountInitValue
  cart.innerHTML = ''
}

menu.addEventListener('click', orderFood)
submitButton.addEventListener('click', checkout)
displayMenu(productData)
