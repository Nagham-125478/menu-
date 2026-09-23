// رقم الواتساب المستقبل للطلبات
const RESTAURANT_WHATSAPP = "962780752735"; 

// قائمة أطعمة المنيو مطابقة للصور
const menuItems = [
    // --- قسم البيتزا ---
    {
        id: 1,
        title: "بيتزا خضار",
        category: "pizza",
        sizes: [
            { name: "صغير", price: 2.00 },
            { name: "وسط", price: 3.00 },
            { name: "كبير", price: 4.00 },
            { name: "عائلي", price: 8.00 }
        ],
        hasStuffedCrustOption: true,
        image: " https://kitchen.sayidaty.net/uploads/small/11/1105018e9f1f137d2dfebf7ad64c7f3a_w750_h500.jpg"
    },
    {
        id: 2,
        title: "بيتزا مكسيكي",
        category: "pizza",
        sizes: [
            { name: "صغير", price: 2.50 },
            { name: "وسط", price: 3.50 },
            { name: "كبير", price: 4.50 },
            { name: "عائلي", price: 9.00 }
        ],
        hasStuffedCrustOption: true,
        image: "https://www.atyabtabkha.com/tachyon/sites/2/2025/09/%D8%A8%D9%8A%D8%AA%D8%B2%D8%A7-%D9%85%D9%83%D8%B3%D9%8A%D9%83%D9%8A-%D8%A8%D8%A7%D9%84%D9%84%D8%AD%D9%85.jpg"
    },
    {
        id: 3,
        title: "بيتزا دجاج",
        category: "pizza",
        sizes: [
            { name: "صغير", price: 2.50 },
            { name: "وسط", price: 3.50 },
            { name: "كبير", price: 4.50 },
            { name: "عائلي", price: 9.00 }
        ],
        hasStuffedCrustOption: true,
        image: "https://kitchen.sayidaty.net/uploads/node/chicken-pizza1.jpg"
    },
    {
        id: 4,
        title: "بيتزا دجاج باربيكيو",
        category: "pizza",
        sizes: [
            { name: "صغير", price: 2.50 },
            { name: "وسط", price: 3.50 },
            { name: "كبير", price: 4.50 },
            { name: "عائلي", price: 9.00 }
        ],
        hasStuffedCrustOption: true,
        image: "https://3la3ene.com/public/uploads/all/xjR29S5r37zQenu3osslbBhyp2witM7jRqwFSeT3.jpg"
    },
    {
        id: 5,
        title: "بيتزا دجاج بالفطر",
        category: "pizza",
        sizes: [
            { name: "صغير", price: 2.50 },
            { name: "وسط", price: 3.50 },
            { name: "كبير", price: 4.50 },
            { name: "عائلي", price: 9.00 }
        ],
        hasStuffedCrustOption: true,
        image: "https://2.bp.blogspot.com/-atb5fdFt1U8/V2K9uDuvdgI/AAAAAAAAAY0/mA_vUbxXReMqupLlMxm-kDgD2YFTtYxnACLcB/s1600/%25D8%25AF%25D8%25AC%25D8%25A7%25D8%25AC.jpg"
    },
    {
        id: 6,
        title: "بيتزا حبش مدخن",
        category: "pizza",
        sizes: [
            { name: "صغير", price: 2.00 },
            { name: "وسط", price: 3.00 },
            { name: "كبير", price: 4.00 },
            { name: "عائلي", price: 8.00 }
        ],
        hasStuffedCrustOption: true,
        image: ""
    },
    {
        id: 7,
        title: "بيتزا سلامي مدخن",
        category: "pizza",
        sizes: [
            { name: "صغير", price: 2.00 },
            { name: "وسط", price: 3.00 },
            { name: "كبير", price: 4.00 },
            { name: "عائلي", price: 8.00 }
        ],
        hasStuffedCrustOption: true,
        image: ""
    },
    {
        id: 8,
        title: "بيتزا سبيشيل",
        category: "pizza",
        sizes: [
            { name: "صغير", price: 2.50 },
            { name: "وسط", price: 3.50 },
            { name: "كبير", price: 4.50 },
            { name: "عائلي", price: 9.00 }
        ],
        hasStuffedCrustOption: true,
        image: ""
    },
    {
        id: 9,
        title: "بيتزا حبش بالفطر",
        category: "pizza",
        sizes: [
            { name: "صغير", price: 2.75 },
            { name: "وسط", price: 4.00 },
            { name: "كبير", price: 5.00 },
            { name: "عائلي", price: 9.00 }
        ],
        hasStuffedCrustOption: true,
        image: ""
    },
    {
        id: 10,
        title: "بيتزا مكس اجبان سلامي",
        category: "pizza",
        sizes: [
            { name: "صغير", price: 2.75 },
            { name: "وسط", price: 4.00 },
            { name: "كبير", price: 5.00 },
            { name: "عائلي", price: 9.00 }
        ],
        hasStuffedCrustOption: true,
        image: ""
    },

    // --- قسم الوجبات ---
    {
        id: 11,
        title: "وجبة فطاير تركية لحمة",
        category: "meals",
        price: 2.50,
        description: "مخلل + دبس الرمان + كولا",
        image: ""
    },
    {
        id: 12,
        title: "وجبة فطاير تركية دجاج",
        category: "meals",
        price: 2.50,
        description: "ثوم + مخلل + كولا",
        image: ""
    },
    {
        id: 13,
        title: "وجبة كالزوني دجاج باربيكيو",
        category: "meals",
        price: 3.00,
        description: "ثوم + كتشب + بطاطا + كولا",
        image: ""
    },
    {
        id: 14,
        title: "وجبة كالزوني مكسيكي",
        category: "meals",
        price: 3.00,
        description: "صوص + ثوم + بطاطا",
        image: ""
    },
    {
        id: 15,
        title: "وجبة كالزوني زنجر حار حلو",
        category: "meals",
        price: 3.50,
        description: "كتشب + ثوم + بطاطا + مخلل + كولا",
        image: ""
    },

    // --- قسم المعجنات الشامية ---
    { id: 16, title: "بيتزا معجنات", category: "pastries", price: 0.50, image: "" },
    { id: 17, title: "لحمة", category: "pastries", price: 0.50, image: "" },
    { id: 18, title: "عرايس لحمة", category: "pastries", price: 0.40, image: "" },
    { id: 19, title: "لحمة حار", category: "pastries", price: 0.60, image: "" },
    { id: 20, title: "جبنة قشقوان", category: "pastries", price: 0.40, image: "" },
    { id: 21, title: "جبنة بيضة", category: "pastries", price: 0.45, image: "" },
    { id: 22, title: "جبنة بزعتر", category: "pastries", price: 0.40, image: "" },
    { id: 23, title: "جبنة بزيتون", category: "pastries", price: 0.40, image: "" },
    { id: 24, title: "جبنة صفرا", category: "pastries", price: 0.25, image: "" },
    { id: 25, title: "صفرا وسنيورة", category: "pastries", price: 0.30, image: "" },
    { id: 26, title: "صفرا ونقانق", category: "pastries", price: 0.30, image: "" },
    { id: 27, title: "كرافت عسل", category: "pastries", price: 0.40, image: "" },
    { id: 28, title: "مكس أربع أجبان", category: "pastries", price: 0.50, image: "" },
    { id: 29, title: "محمرة بالجبن", category: "pastries", price: 0.35, image: "" },
    { id: 30, title: "محمرة زعتر", category: "pastries", price: 0.35, image: "" },
    { id: 31, title: "عرايس دجاج", category: "pastries", price: 0.60, image: "" },
    { id: 32, title: "دجاج مكسيكي", category: "pastries", price: 0.50, image: "" },
    { id: 33, title: "لبنة بزعتر", category: "pastries", price: 0.30, image: "" },
    { id: 34, title: "لبنة بزيتون", category: "pastries", price: 0.30, image: "" },
    { id: 35, title: "نوتيلا", category: "pastries", price: 0.50, image: "" },

    // --- قسم الفطاير التركية ---
    { id: 36, title: "فطيرة بطاطا بالدجاج الحار", category: "turkish", price: 2.00, image: "" },
    { id: 37, title: "فطيرة دجاج مسحب بالخضار", category: "turkish", price: 2.00, image: "" },
    { id: 38, title: "فطيرة دجاج باربيكيو", category: "turkish", price: 2.00, image: "" },
    { id: 39, title: "فطيرة دجاج مكسيكي", category: "turkish", price: 2.00, image: "" },
    { id: 40, title: "فطيرة كرافت بيض", category: "turkish", price: 1.00, image: "" },
    { id: 41, title: "فطيرة لحمة دار بالقشقوان", category: "turkish", price: 2.50, image: "" }
];

let cart = [];

// عند التحميل
document.addEventListener("DOMContentLoaded", () => {
    renderMenu(menuItems);
});

// عرض المنتجات
function renderMenu(items) {
    const menuGrid = document.getElementById("menu-grid");
    menuGrid.innerHTML = "";

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "product-card";

        // التعامل مع خيارات البيتزا مقابل باقي الأصناف
        let optionsHTML = "";
        if (item.sizes) {
            optionsHTML += `<div class="options-group"><label>الحجم:</label><select id="size-${item.id}" onchange="updatePizzaPrice(${item.id})">`;
            item.sizes.forEach((s, idx) => {
                optionsHTML += `<option value="${idx}">${s.name} (${s.price.toFixed(2)} د.أ)</option>`;
            });
            optionsHTML += `</select></div>`;

            if (item.hasStuffedCrustOption) {
                optionsHTML += `<div class="options-group crust-opt"><label><input type="checkbox" id="stuffed-${item.id}" onchange="updatePizzaPrice(${item.id})"> أطراف محشية (+1.00 د.أ)</label></div>`;
            }
        }

        // إظهار الوصف فقط وفقط لوجبات قسم الوجبات (meals)
        const descriptionHTML = (item.category === "meals" && item.description) 
            ? `<p class="meal-description">${item.description}</p>` 
            : "";

        const initialPrice = item.sizes ? item.sizes[0].price : item.price;
        const defaultImg = item.image;

        card.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${defaultImg}" id="img-display-${item.id}" alt="${item.title}" class="product-img">
            </div>
            <div class="product-info">
                <h3 class="product-title">${item.title}</h3>
                ${descriptionHTML}
                ${optionsHTML}
                <div class="product-bottom">
                    <span class="product-price" id="price-display-${item.id}">${initialPrice.toFixed(2)} د.أ</span>
                    <button class="add-btn" onclick="addToCart(${item.id})">
                        <i class="fa-solid fa-plus"></i> إضافة
                    </button>
                </div>
            </div>
        `;
        menuGrid.appendChild(card);
    });
}

// تحديث سعر البيتزا تفاعلياً
function updatePizzaPrice(id) {
    const item = menuItems.find(p => p.id === id);
    if (!item || !item.sizes) return;

    const sizeIndex = document.getElementById(`size-${id}`).value;
    let price = item.sizes[sizeIndex].price;

    const stuffedCheckbox = document.getElementById(`stuffed-${id}`);
    if (stuffedCheckbox && stuffedCheckbox.checked) {
        price += 1.00;
    }

    document.getElementById(`price-display-${id}`).innerText = `${price.toFixed(2)} د.أ`;
}

// تصفية الأقسام
function filterCategory(category, button) {
    document.querySelectorAll(".cat-btn").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    if (category === "all") {
        renderMenu(menuItems);
    } else {
        const filtered = menuItems.filter(item => item.category === category);
        renderMenu(filtered);
    }
}

// التحكم بالسلة
function toggleCart() {
    document.getElementById("cart-drawer").classList.toggle("active");
    document.getElementById("cart-overlay").classList.toggle("active");
}

function addToCart(id) {
    const product = menuItems.find(p => p.id === id);
    let selectedTitle = product.title;
    let itemPrice = product.price;

    if (product.sizes) {
        const sizeIndex = document.getElementById(`size-${id}`).value;
        const selectedSize = product.sizes[sizeIndex];
        itemPrice = selectedSize.price;
        selectedTitle += ` (${selectedSize.name})`;

        const stuffedCheckbox = document.getElementById(`stuffed-${id}`);
        if (stuffedCheckbox && stuffedCheckbox.checked) {
            itemPrice += 1.00;
            selectedTitle += ` + أطراف محشية`;
        }
    }

    const cartKey = `${id}-${selectedTitle}`;
    const cartItem = cart.find(item => item.cartKey === cartKey);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({
            cartKey: cartKey,
            id: id,
            title: selectedTitle,
            price: itemPrice,
            quantity: 1
        });
    }

    updateCartUI();
}

function updateQuantity(cartKey, change) {
    const cartItem = cart.find(item => item.cartKey === cartKey);
    if (cartItem) {
        cartItem.quantity += change;
        if (cartItem.quantity <= 0) {
            cart = cart.filter(item => item.cartKey !== cartKey);
        }
    }
    updateCartUI();
}

function updateCartUI() {
    const cartContainer = document.getElementById("cart-items-container");
    const cartBadge = document.getElementById("cart-badge");
    const cartTotal = document.getElementById("cart-total-price");

    cartContainer.innerHTML = "";
    let total = 0;
    let totalCount = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        totalCount += item.quantity;

        const itemElement = document.createElement("div");
        itemElement.className = "cart-item";
        itemElement.innerHTML = `
            <div class="item-details">
                <h4>${item.title}</h4>
                <p>${itemTotal.toFixed(2)} د.أ</p>
            </div>
            <div class="qty-controls">
                <button class="qty-btn" onclick="updateQuantity('${item.cartKey}', -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity('${item.cartKey}', 1)">+</button>
            </div>
        `;
        cartContainer.appendChild(itemElement);
    });

    cartBadge.innerText = totalCount;
    cartTotal.innerText = `${total.toFixed(2)} د.أ`;
}

// التحكم بخيار كليك
function toggleCliqDetails() {
    const cliqSelected = document.querySelector('input[name="payment_method"]:checked').value.includes("كليك");
    const cliqBox = document.getElementById("cliq-details");
    if (cliqSelected) {
        cliqBox.classList.remove("hidden");
    } else {
        cliqBox.classList.add("hidden");
    }
}

// نسخ رقم CliQ
function copyCliqNumber() {
    const cliqNum = document.getElementById("cliq-number").innerText;
    navigator.clipboard.writeText(cliqNum).then(() => {
        alert("تم نسخ رقم CliQ بنجاح: " + cliqNum);
    }).catch(err => {
        console.error("خطأ بالنسخ: ", err);
    });
}

// إرسال الطلب عبر الواتساب
function sendOrderToWhatsApp() {
    if (cart.length === 0) {
        alert("سلة الطلبات فارغة! يرجى اختيار وجبات أولاً.");
        return;
    }

    const selectedPayment = document.querySelector('input[name="payment_method"]:checked').value;
    const isCliq = selectedPayment.includes("كليك");
    const notes = document.getElementById("order-notes").value.trim();
    let total = 0;

    let message = `*طلب جديد - بيتزا ومعجنات حي الزهور* 🍕\n\n`;
    message += `*تفاصيل الطلب:*\n`;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `${index + 1}. ${item.title} (عدد: ${item.quantity}) - ${itemTotal.toFixed(2)} د.أ\n`;
    });

    message += `\n💰 *المجموع الكلي:* ${total.toFixed(2)} د.أ\n`;

    if (isCliq) {
        message += `💳 *طريقة الدفع:* 📱 كليك (CliQ)\n`;
        message += `📌 *ملاحظة:* تم اختيار الدفع عبر CliQ. (يرجى إرفاق صورة وصل التحويل هنا لتأكيد الطلب).\n`;
    } else {
        message += `💳 *طريقة الدفع:* 💵 نقداً عند الاستلام\n`;
    }

    if (notes) {
        message += `\n📝 *ملاحظات إضافية:* ${notes}\n`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodedMessage}`;
    
    window.open(whatsappURL, "_blank");
}