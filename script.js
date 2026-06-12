const WHATSAPP_NUMBER = "50370622096";
const PRICE = 12;

const products = [
  {
    id: "traje",
    name: "1 Talla S",
    stock: 1,
    images: ["TrajesdeBano/Traje1.png", "TrajesdeBano/Traje2.png"]
  },
  {
    id: "traje-b",
    name: "2 Talla M",
    stock: 1,
    images: ["TrajesdeBano/Trajeb1.png", "TrajesdeBano/Trajeb2.png"]
  },
  {
    id: "traje-bano",
    name: "3 Talla XS",
    stock: 1,
    images: ["TrajesdeBano/Trajebaño1.png", "TrajesdeBano/Trajebaño2.png"]
  },
  {
    id: "traje-c",
    name: "4 Talla S",
    stock: 1,
    images: ["TrajesdeBano/Trajec1.png", "TrajesdeBano/Trajec2.png"]
  },
  {
    id: "traje-cito",
    name: "5Talla M",
    stock: 1,
    images: ["TrajesdeBano/Trajecito1.png", "TrajesdeBano/Trajecito2.png"]
  },
  {
    id: "traje-f",
    name: "6 Talla M",
    stock: 1,
    images: ["TrajesdeBano/Trajef1.png", "TrajesdeBano/Trajef2.png"]
  },
  {
    id: "traje-l",
    name: "7 Talla S",
    stock: 1,
    images: ["TrajesdeBano/Trajel1.png", "TrajesdeBano/Trajel2.png"]
  },
  {
    id: "traje-v",
    name: "8 Talla S",
    stock: 1,
    images: ["TrajesdeBano/Trajev1.png", "TrajesdeBano/Trajev2.png"]
  },
  {
    id: "traje-floral",
    name: "9 Talla S",
    stock: 1,
    images: ["TrajesdeBano/TrajeFloral1.png", "TrajesdeBano/TrajeFloral3.png", "TrajesdeBano/TrajeFloral4.png"]
  },
  {
    id: "traje-hojas", name: "10 Talla S",
    stock: 1,
    images: ["TrajesdeBano/TrajeHojas1.png", "TrajesdeBano/TrajeHojas1.png"]
  },
  {
    id: "traje-celeste", name: "11 Talla M",
    stock: 1,
    images: ["TrajesdeBano/TrajeCeleste1.png", "TrajesdeBano/TrajeCeleste2.png"]
  },
  {
    id: "traje-tirantes", name: "12 Talla S",
    stock: 1,
    images: ["TrajesdeBano/TrajeTirantes1.png", "TrajesdeBano/TrajeTirantes2.png"]
  },
  {
    id: "traje-morado", name: "13 Talla M",
    stock: 1,
    images: ["TrajesdeBano/TrajeMorado1.png", "TrajesdeBano/TrajeMorado2.png"]
  },
  {
    id: "traje-naranja", name: "14 Talla S, M",
    stock: 1,
    images: ["TrajesdeBano/TrajeNaranja1.png", "TrajesdeBano/TrajeNaranja2.png"]
  },
  {
    id: "traje-cordon", name: "15 Talla M",
    stock: 1,
    images: ["TrajesdeBano/TrajeCordon1.png", "TrajesdeBano/TrajeCordon2.png"]
  },
  {
    id: "traje-cordonfloral", name: "16 Talla M",
    stock: 1,
    images: ["TrajesdeBano/TrajeCordonFloral1.png", "TrajesdeBano/TrajeCordonFloral2.png"]
  },
  {
    id: "traje-bikini", name: "17 Talla M",
    stock: 1,
    images: ["TrajesdeBano/TrajeBikini1.png", "TrajesdeBano/TrajeBikini2.png"]
  },
  {
    id: "traje-rosita", name: "18 Talla S",
    stock: 1,
    images: ["TrajesdeBano/TrajeRosita1.png", "TrajesdeBano/TrajeRosita2.png"]
  },
  {
    id: "traje-verdea", name: "19 Talla M",
    stock: 1,
    images: ["TrajesdeBano/TrajeVerdea1.png", "TrajesdeBano/TrajeVerdea2.png"]
  },
  {
    id: "traje-celesteclaro", name: "20 Talla L",
    stock: 1,
    images: ["TrajesdeBano/TrajeCelesteClaro1.png", "TrajesdeBano/TrajeCelesteClaro2.png"]
  },
  {
    id: "traje-amarillo", name: "21 Talla S, M",
    stock: 1,
    images: ["TrajesdeBano/TrajeAmarillo1.png", "TrajesdeBano/TrajeAmarillo2.png"]
  },
  {
    id: "traje-geopardo", name: "22 Talla S",
    stock: 1,
    images: ["TrajesdeBano/TrajeGeopardo1.png", "TrajesdeBano/TrajeGeopardo2.png"]
  },
  {
    id: "traje-a", name: "23 Talla L",
    stock: 1,
    images: ["TrajesdeBano/TrajeA1.png", "TrajesdeBano/TrajeA2.png"]
  },
  {
    id: "traje-brosa", name: "24 Talla L",
    stock: 1,
    images: ["TrajesdeBano/TrajeBRosa1.png", "TrajesdeBano/TrajeBRosa2.png"]
  },
  {
    id: "traje-011", name: "25 Talla M",
    stock: 1,
    images: ["TrajesdeBano/Traje011.png", "TrajesdeBano/Traje012.png"]
  },
  {
    id: "traje-rayas", name: "26 Talla L",
    stock: 1,
    images: ["TrajesdeBano/TrajeRayasN1.png", "TrajesdeBano/TrajeRayasN2.png"]
  }
];


const state = {
  cart: []
};

const productGrid = document.querySelector("#productGrid");
const cartDrawer = document.querySelector("#cartDrawer");
const overlay = document.querySelector("#overlay");
const cartCount = document.querySelector("#cartCount");
const cartItems = document.querySelector("#cartItems");
const cartSubtotal = document.querySelector("#cartSubtotal");
const cartTotal = document.querySelector("#cartTotal");
const checkoutToggle = document.querySelector("#checkoutToggle");
const checkoutForm = document.querySelector("#checkoutForm");
const formError = document.querySelector("#formError");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

function formatMoney(value) {
  return `$${value.toFixed(2)}`;
}

function renderProducts() {
  // Cada tarjeta conserva su selector de talla independiente por modelo.
  productGrid.innerHTML = products
    .map((product) => {
      const [image1, image2] = product.images;

      return `
      <article class="product-card">
        <div class="product-images">
          <div class="product-image" style="background-image: url('${image1}');"></div>
          <div class="product-image" style="background-image: url('${image2}');"></div>
        </div>
        <div class="product-info">

          <div class="product-top">
            <h3>${product.name}</h3>
            <span class="price">${formatMoney(PRICE)}</span>
          </div>
          <button class="btn btn-primary add-to-cart" type="button" data-id="${product.id}">
            Agregar al carrito
          </button>
        </div>
      </article>
    `;
    })
    .join("");
}

function getProduct(productId) {
  return products.find((product) => product.id === productId);
}

function addToCart(productId) {
  const product = getProduct(productId);
  if (!product) return;

  const existingItem = state.cart.find((item) => item.id === productId);

  if (existingItem) {
    if (existingItem.quantity >= existingItem.stock) return;
    existingItem.quantity += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      image: product.images[0],
      price: PRICE,
      quantity: 1,
      stock: product.stock
    });
  }

  renderCart();
  openCart();
}

function updateQuantity(index, direction) {
  const item = state.cart[index];

  if (direction > 0 && item.quantity >= item.stock) return;

  item.quantity += direction;

  if (item.quantity <= 0) {
    state.cart.splice(index, 1);
  }

  renderCart();
}

function removeItem(index) {
  state.cart.splice(index, 1);
  renderCart();
}

function getCartTotal() {
  return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function getCartCount() {
  return state.cart.reduce((total, item) => total + item.quantity, 0);
}

function getProductImageUrl(imagePath) {
  return new URL(imagePath, window.location.href).href;
}

function renderCart() {
  // El drawer se re-renderiza despues de cada cambio para mantener totales sincronizados.
  cartCount.textContent = getCartCount();
  const total = getCartTotal();
  cartSubtotal.textContent = formatMoney(total);
  cartTotal.textContent = formatMoney(total);
  checkoutToggle.disabled = state.cart.length === 0;

  if (!state.cart.length) {
    cartItems.innerHTML = `<p class="empty-cart">Tu carrito esta listo para recibir piezas de verano.</p>`;
    checkoutForm.classList.remove("visible");
    return;
  }

  cartItems.innerHTML = state.cart.map((item, index) => `
    <article class="cart-line">
      <div class="cart-thumb" style="background-image: url('${item.image}');"></div>
      <div class="cart-meta">
        <h3>${item.name}</h3>
        <p>${formatMoney(item.price)} c/u</p>
        <div class="cart-controls">
          <div class="quantity" aria-label="Cantidad para ${item.name}">
            <button type="button" data-action="decrease" data-index="${index}" aria-label="Restar">-</button>
            <span>${item.quantity}</span>
            <button type="button" data-action="increase" data-index="${index}" aria-label="Sumar">+</button>
          </div>
          <button class="remove-item" type="button" data-action="remove" data-index="${index}">Eliminar</button>
        </div>
      </div>
    </article>
  `).join("");
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  overlay.hidden = false;
  document.body.classList.add("drawer-open");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  overlay.hidden = true;
  document.body.classList.remove("drawer-open");
}

function validateCheckout(formData) {
  const requiredFields = ["nombre", "apellido", "telefono", "correo", "ciudad", "direccion", "departamento"];
  const missingField = requiredFields.find((field) => !String(formData.get(field) || "").trim());

  if (missingField) {
    return "Completa todos los campos de envio para confirmar tu pedido.";
  }

  if (!state.cart.length) {
    return "Agrega al menos un producto al carrito antes de confirmar.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get("correo").trim())) {
    return "Ingresa un correo electronico valido.";
  }

  return "";
}

function buildWhatsAppMessage(formData) {
  // WhatsApp requiere el mensaje codificado en la URL; aqui solo armo el texto limpio.
  const productLines = state.cart.map((item, index) => {
    const lineTotal = formatMoney(item.price * item.quantity);
    return [
      `${index + 1}. ${item.name}`,
      `Cantidad: ${item.quantity}`,
      `Total: ${lineTotal}`
    ].join("\n");
  }).join("\n");

  return [
    "Hola Tropical Avenue, quiero confirmar este pedido:",
    "",
    "DETALLE DEL PEDIDO",
    productLines,
    "",
    `TOTAL: ${formatMoney(getCartTotal())}`,
    "",
    "DATOS DE ENVIO",
    `Nombre: ${formData.get("nombre").trim()} ${formData.get("apellido").trim()}`,
    `Telefono: ${formData.get("telefono").trim()}`,
    `Correo: ${formData.get("correo").trim()}`,
    `Ciudad: ${formData.get("ciudad").trim()}`,
    `Departamento: ${formData.get("departamento").trim()}`,
    `Direccion exacta: ${formData.get("direccion").trim()}`
  ].join("\n");
}

function handleCheckout(event) {
  event.preventDefault();
  const formData = new FormData(checkoutForm);
  const error = validateCheckout(formData);

  if (error) {
    formError.textContent = error;
    return;
  }

  formError.textContent = "";
  const message = encodeURIComponent(buildWhatsAppMessage(formData));
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener");
}

renderProducts();
renderCart();

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".add-to-cart");
  if (!button) return;

  addToCart(button.dataset.id);
});

cartItems.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  console.log("Clicked cart action:", target);
  if (!target) return;

  const index = Number(target.dataset.index);
  const action = target.dataset.action;

  if (action === "increase") updateQuantity(index, 1);
  if (action === "decrease") updateQuantity(index, -1);
  if (action === "remove") removeItem(index);
});

document.querySelector(".cart-fab").addEventListener("click", openCart);
document.querySelector("#closeCart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

checkoutToggle.addEventListener("click", () => {
  if (!state.cart.length) return;
  checkoutForm.classList.toggle("visible");
});

checkoutForm.addEventListener("submit", handleCheckout);

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeCart();
});
