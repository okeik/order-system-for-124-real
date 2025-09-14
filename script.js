// 管理員密碼
const ADMIN_PASSWORD = "ILoveFreeDream";

// 當前選擇的座號
let currentSeat = null;

// 當前選擇的商品（用於數量選擇彈窗）
let currentItem = null;

// 訂單數據存儲
let ordersData = {};

// 完整餐廳菜單
const menus = {
    "內訂": [
        { name: "大家鐵路1號", price: 80 },
        { name: "大家鐵路2號", price: 85 },
        { name: "太師傅1號", price: 80 },
        { name: "太師傅2號", price: 75 },
        { name: "太師傅3號", price: 70 },
        { name: "太師傅素食", price: 70 },
        { name: "正園A餐", price: 65 },
        { name: "正園B餐", price: 65 },
        { name: "正園羊肉", price: 65 },
        { name: "米寶1號", price: 80 },
        { name: "米寶3號", price: 90 },
        { name: "米寶方便素", price: 80 },
        { name: "海苔飯卷", price: 60 }
    ],
    "蝦米飯": [
        { name: "蝦米套餐-大", price: 80 },
        { name: "蝦米套餐-小", price: 70 },
        { name: "白飯套餐-大", price: 80 },
        { name: "白飯套餐-小", price: 70 },
        { name: "蝦米飯", price: 40 },
        { name: "乾麵", price: 55 },
        { name: "湯麵", price: 55 },
        { name: "乾", price: 45 },
        { name: "湯", price: 45 },
        { name: "深海炒魚頭湯", price: 150 },
        { name: "味噌/薑絲湯", price: 100 },
        { name: "龜魚湯", price: 80 },
        { name: "魚丸湯", price: 35 },
        { name: "蛋花湯", price: 20 },
        { name: "龜魚麵線", price: 110 },
        { name: "龜魚粥", price: 110 },
        { name: "麵線", price: 30 },
        { name: "深海炒魚頭肉（份）", price: 150 },
        { name: "炒魚頭、肉（份）", price: 120 },
        { name: "燙青菜", price: 40 },
        { name: "豬耳朵（份）", price: 40 },
        { name: "蔥蛋", price: 40 },
        { name: "荷包蛋", price: 15 },
        { name: "香腸", price: 40 },
        { name: "白飯", price: 10 }
    ],
    "相撲咖哩": [
        { name: "咖哩蛋包飯系列-經典豬排", price: 80 },
        { name: "咖哩蛋包飯系列-和風雞排", price: 80 },
        { name: "咖哩蛋包飯系列-原汁牛肉", price: 80 },
        { name: "咖哩蛋包飯系列-醬燒培根", price: 80 },
        { name: "咖哩蛋包飯系列-椒鹽鱈魚", price: 80 },
        { name: "咖哩蛋包飯系列-醬燒豬柳", price: 80 },
        { name: "咖哩蛋包飯系列-蔬菜可樂餅", price: 80 },
        { name: "咖哩蛋包飯系列-香草嫩雞", price: 80 },
        { name: "咖哩烏龍拌麵系列-經典豬排", price: 90 },
        { name: "咖哩烏龍拌麵系列-和風雞排", price: 90 },
        { name: "咖哩烏龍拌麵系列-原汁牛肉", price: 90 },
        { name: "咖哩烏龍拌麵系列-醬燒培根", price: 90 },
        { name: "咖哩烏龍拌麵系列-椒鹽鱈魚", price: 90 },
        { name: "咖哩烏龍拌麵系列-醬燒豬柳", price: 90 },
        { name: "咖哩烏龍拌麵系列-蔬菜可樂餅", price: 90 },
        { name: "咖哩烏龍拌麵系列-香草嫩雞", price: 90 },
        { name: "起司焗烤蛋包飯系列-經典豬排", price: 110 },
        { name: "起司焗烤蛋包飯系列-和風雞排", price: 110 },
        { name: "起司焗烤蛋包飯系列-原汁牛肉", price: 110 },
        { name: "起司焗烤蛋包飯系列-醬燒培根", price: 110 },
        { name: "起司焗烤蛋包飯系列-椒鹽鱈魚", price: 110 },
        { name: "起司焗烤蛋包飯系列-醬燒豬柳", price: 110 },
        { name: "起司焗烤蛋包飯系列-蔬菜可樂餅", price: 110 },
        { name: "起司焗烤蛋包飯系列-香草嫩雞", price: 110 },
        { name: "點心小品-黃金脆薯", price: 40 },
        { name: "點心小品-辣味雞球", price: 40 },
        { name: "點心小品-QQ麻吉棒", price: 40 },
        { name: "點心小品-玉米可樂餅", price: 40 }
    ],
    "八方雲集": [
        { name: "招牌鍋貼", price: 7 },
        { name: "韭菜鍋貼", price: 7 },
        { name: "韓式辣味鍋貼", price: 7 },
        { name: "咖哩雞肉鍋貼", price: 7 },
        { name: "玉米鍋貼", price: 7 },
        { name: "新蔬食鍋貼", price: 7.5 },
        { name: "招牌水餃", price: 7 },
        { name: "韭菜水餃", price: 7 },
        { name: "韓式辣味水餃", price: 7 },
        { name: "咖哩雞肉水餃", price: 7 },
        { name: "玉米水餃", price: 7 },
        { name: "新蔬食水餃", price: 7.5 },
        { name: "鮮蝦水餃", price: 10.5 },
        { name: "酸辣湯餃(8顆招牌水餃)", price: 90 },
        { name: "玉米湯餃(8顆招牌水餃)", price: 90 },
        { name: "紅燒牛肉麵", price: 168 },
        { name: "清燉牛肉麵", price: 168 },
        { name: "麻辣牛肉麵", price: 178 },
        { name: "紅燒牛肉湯", price: 158 },
        { name: "清燉牛肉湯", price: 158 },
        { name: "麻辣牛肉湯", price: 168 },
        { name: "紅燒牛湯餃(8顆)", price: 120 },
        { name: "麻辣牛湯餃(8顆)", price: 125 },
        { name: "紅燒牛湯珍珠餛飩(小顆10顆)", price: 125 },
        { name: "麻辣牛湯珍珠餛飩(小顆10顆)", price: 130 },
        { name: "紅燒牛湯菜肉大餛飩(大顆6顆)", price: 125 },
        { name: "麻辣牛湯菜肉大餛飩(大顆6顆)", price: 130 },
        { name: "古早味乾麵", price: 45 },
        { name: "招牌乾麵", price: 55 },
        { name: "麻醬乾麵", price: 55 },
        { name: "紹辣乾麵", price: 60 },
        { name: "古早味湯麵", price: 45 },
        { name: "酸辣湯麵", price: 70 },
        { name: "珍珠餛飩麵", price: 70 },
        { name: "菜肉大餛飩麵", price: 80 },
        { name: "榨菜肉絲麵", price: 80 },
        { name: "紹辣珍珠餛飩麵", price: 80 },
        { name: "紹辣菜肉大餛飩麵", price: 90 },
        { name: "珍珠和風抄手(小顆8顆)", price: 60 },
        { name: "珍珠紅油抄手(小顆8顆)", price: 60 },
        { name: "菜肉和風大抄手(大顆6顆)", price: 75 },
        { name: "菜肉紅油大抄手(大顆6顆)", price: 75 },
        { name: "酸辣湯", price: 35 },
        { name: "玉米濃湯", price: 35 },
        { name: "旗魚花枝丸湯", price: 35 },
        { name: "蕈菇湯", price: 35 },
        { name: "蘿蔔排骨湯", price: 35 },
        { name: "珍珠餛飩湯", price: 50 },
        { name: "菜肉大餛飩湯", price: 60 },
        { name: "香濃豆漿", price: 20 },
        { name: "香濃豆漿(無加糖)", price: 20 },
        { name: "黑豆漿", price: 20 },
        { name: "真傳特調紅茶", price: 20 },
        { name: "寒天真傳特調紅茶", price: 45 },
        { name: "滷蛋", price: 15 },
        { name: "皮蛋豆腐(整粒)", price: 45 },
        { name: "家常小菜", price: 40 },
        { name: "小菜雙拼", price: 40 },
        { name: "柚香蘿蔔", price: 40 },
        { name: "黃金豆腐", price: 35 },
        { name: "燙青菜", price: 35 },
        { name: "燉蘿蔔", price: 35 },
        { name: "和風秋葵", price: 35 },
        { name: "薄鹽毛豆", price: 35 },
        { name: "韓式泡菜", price: 30 },
        { name: "黃金泡菜", price: 30 },
        { name: "台式泡菜", price: 30 }
    ],
    "琪仙館": [
        { name: "肉燥飯-大碗", price: 45 },
        { name: "肉燥飯-小碗", price: 35 },
        { name: "雞肉飯-大碗", price: 45 },
        { name: "雞肉飯-小碗", price: 35 },
        { name: "鴨肉飯-大碗", price: 55 },
        { name: "鴨肉飯-小碗", price: 45 },
        { name: "腳庫飯", price: 65 },
        { name: "肉燥飯便當", price: 75 },
        { name: "雞肉飯便當", price: 75 },
        { name: "鴨肉飯便當", price: 85 },
        { name: "腳庫飯便當", price: 85 },
        { name: "大腸飯便當", price: 85 },
        { name: "鱸水意麵-大碗", price: 50 },
        { name: "鱸水意麵-小碗", price: 40 },
        { name: "麻醬麵-大碗", price: 60 },
        { name: "麻醬麵-小碗", price: 45 },
        { name: "餛飩麵-大碗", price: 65 },
        { name: "餛飩麵-小碗", price: 55 },
        { name: "鴨肉麵-大碗", price: 65 },
        { name: "鴨肉麵-小碗", price: 55 },
        { name: "綜合滷味-大碗", price: 100 },
        { name: "綜合滷味-小碗", price: 60 },
        { name: "大腸湯", price: 50 },
        { name: "豬血湯", price: 50 },
        { name: "青菜-地瓜葉", price: 35 },
        { name: "青菜-高麗菜", price: 35 },
        { name: "皮蛋豆腐", price: 35 },
        { name: "豬肉盤（煙燻）", price: 50 },
        { name: "鴨肉盤（煙燻）", price: 50 }
    ]
};

// 工具函數：顯示狀態消息
function showStatus(message, type = 'success') {
    const statusDiv = document.getElementById('status-message');
    if (statusDiv) {
        statusDiv.innerHTML = `<div class="status-message ${type}">${message}</div>`;
        setTimeout(() => {
            statusDiv.innerHTML = '';
        }, 3000);
    }
}

// 工具函數：獲取訂單數據
function getOrders() {
    return ordersData || {};
}

// 工具函數：保存訂單數據
function saveOrders(orders) {
    ordersData = orders;
    try {
        localStorage.setItem("orders", JSON.stringify(orders));
    } catch (e) {
        console.log("localStorage 保存失敗");
    }
}

// 載入座號並顯示訂餐界面
function loadSeatOrders() {
    const seatInput = document.getElementById("seat-number");
    if (!seatInput) return;
    
    const seat = seatInput.value;
    
    if (!seat || seat < 1 || seat > 31) {
        showStatus("請輸入 1~31 的座號", 'error');
        return;
    }
    
    currentSeat = seat;
    const orderSection = document.getElementById("order-input");
    if (orderSection) {
        orderSection.style.display = "block";
    }
    showStatus(`已選擇座號 ${seat}`, 'success');
    displaySeatOrders(seat);
}

// 顯示選定餐廳的菜單
function showMenu(restaurant) {
    const menuDiv = document.getElementById("menu");
    if (!menuDiv) return;
    
    menuDiv.innerHTML = "";
    menuDiv.classList.remove('show');
    
    if (!restaurant || !menus[restaurant]) {
        return;
    }
    
    const items = menus[restaurant];
    
    items.forEach((item) => {
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";
        
        const itemInfo = document.createElement("div");
        itemInfo.className = "item-info";
        
        const itemName = document.createElement("div");
        itemName.className = "item-name";
        itemName.textContent = item.name;
        
        const itemPrice = document.createElement("div");
        itemPrice.className = "item-price";
        itemPrice.textContent = `${item.price} 元`;
        
        itemInfo.appendChild(itemName);
        itemInfo.appendChild(itemPrice);
        
        const btn = document.createElement("button");
        btn.className = "add-btn";
        btn.textContent = "選購";
        btn.onclick = function() {
            openQuantityModal(item);
        };
        
        menuItem.appendChild(itemInfo);
        menuItem.appendChild(btn);
        menuDiv.appendChild(menuItem);
    });
    
    menuDiv.classList.add('show');
}

// 開啟數量選擇彈窗
function openQuantityModal(item) {
    if (!currentSeat) {
        showStatus("請先輸入座號", 'error');
        return;
    }
    
    currentItem = item;
    document.getElementById('modal-item-name').textContent = item.name;
    document.getElementById('modal-item-price').textContent = item.price;
    document.getElementById('quantity-input').value = 1;
    updateSubtotal();
    document.getElementById('quantity-modal').style.display = 'block';
}

// 關閉數量選擇彈窗
function closeQuantityModal() {
    document.getElementById('quantity-modal').style.display = 'none';
    currentItem = null;
}

// 改變數量
function changeQuantity(delta) {
    const quantityInput = document.getElementById('quantity-input');
    if (!quantityInput) return;
    
    let quantity = parseInt(quantityInput.value) + delta;
    if (quantity < 1) quantity = 1;
    if (quantity > 99) quantity = 99;
    
    quantityInput.value = quantity;
    updateSubtotal();
}

// 更新小計
function updateSubtotal() {
    if (!currentItem) return;
    
    const quantity = parseInt(document.getElementById('quantity-input').value) || 1;
    const subtotal = currentItem.price * quantity;
    document.getElementById('modal-subtotal').textContent = subtotal;
}

// 確認加入訂單
function confirmAddOrder() {
    const quantity = parseInt(document.getElementById('quantity-input').value);
    
    if (!currentItem || !currentSeat || quantity < 1) {
        showStatus("數據錯誤，請重新選擇", 'error');
        return;
    }
    
    const orders = getOrders();
    if (!orders[currentSeat]) {
        orders[currentSeat] = [];
    }
    
    const existingItemIndex = orders[currentSeat].findIndex(order => order.name === currentItem.name);
    
    if (existingItemIndex !== -1) {
        orders[currentSeat][existingItemIndex].quantity += quantity;
    } else {
        orders[currentSeat].push({
            name: currentItem.name,
            price: currentItem.price,
            quantity: quantity
        });
    }
    
    saveOrders(orders);
    showStatus(`已加入 ${currentItem.name} x${quantity}`, 'success');
    displaySeatOrders(currentSeat);
    closeQuantityModal();
}

// 顯示座號的訂單
function displaySeatOrders(seat) {
    const orderItems = document.getElementById("order-items");
    if (!orderItems) return;
    
    orderItems.innerHTML = "";
    
    const orders = getOrders();
    const seatOrders = orders[seat] || [];
    let total = 0;
    
    if (seatOrders.length === 0) {
        orderItems.innerHTML = "<li style='text-align: center; color: #666; padding: 20px;'>尚無訂單</li>";
    } else {
        seatOrders.forEach((item, idx) => {
            const quantity = item.quantity || 1;
            const price = item.price || 0;
            const subtotal = price * quantity;
            total += subtotal;
            
            const li = document.createElement("li");
            li.className = "order-item";
            
            const itemInfo = document.createElement("div");
            itemInfo.className = "order-item-info";
            
            const itemName = document.createElement("div");
            itemName.className = "order-item-name";
            itemName.textContent = item.name;
            
            const itemDetails = document.createElement("div");
            itemDetails.className = "order-item-details";
            itemDetails.textContent = `單價: ${price} 元 | 小計: ${subtotal} 元`;
            
            itemInfo.appendChild(itemName);
            itemInfo.appendChild(itemDetails);
            
            const controls = document.createElement("div");
            controls.className = "order-item-controls";
            
            const quantityDisplay = document.createElement("div");
            quantityDisplay.className = "quantity-display";
            quantityDisplay.textContent = `x${quantity}`;
            
            const delBtn = document.createElement("button");
            delBtn.textContent = "刪除";
            delBtn.className = "delete-btn";
            delBtn.onclick = function() {
                seatOrders.splice(idx, 1);
                orders[seat] = seatOrders;
                if (seatOrders.length === 0) {
                    delete orders[seat];
                }
                saveOrders(orders);
                displaySeatOrders(seat);
                showStatus(`已刪除 ${item.name}`, 'success');
            };
            
            controls.appendChild(quantityDisplay);
            controls.appendChild(delBtn);
            
            li.appendChild(itemInfo);
            li.appendChild(controls);
            orderItems.appendChild(li);
        });
    }
    
    const totalElement = document.getElementById("total");
    if (totalElement) {
        totalElement.textContent = total;
    }
}

// 管理員查看所有訂單
function viewAllOrders() {
    const passwordInput = document.getElementById("admin-password");
    const password = passwordInput ? passwordInput.value : "";
    
    if (password !== ADMIN_PASSWORD) {
        showStatus("管理員密碼錯誤", 'error');
        return;
    }
    
    // 密碼正確後清空輸入框並顯示成功訊息
    if (passwordInput) {
        passwordInput.value = "";
    }
    showStatus("管理員登入成功", 'success');
    
    const orders = getOrders();
    const allDiv = document.getElementById("all-orders");
    if (!allDiv) return;
    
    allDiv.innerHTML = "";
    
    if (Object.keys(orders).length === 0) {
        allDiv.innerHTML = "<p style='text-align: center; color: #666;'>目前沒有任何訂單</p>";
        return;
    }
    
    for (const seat in orders) {
        if (orders[seat].length === 0) continue;
        
        const seatDiv = document.createElement("div");
        seatDiv.className = "seat-orders";
        
        const seatTitle = document.createElement("h4");
        seatTitle.className = "seat-title";
        seatTitle.textContent = `座號 ${seat}`;
        
        const ordersList = document.createElement("ul");
        ordersList.style.listStyle = "none";
        ordersList.style.padding = "0";
        
        let seatTotal = 0;
        
        orders[seat].forEach((item) => {
            const subtotal = item.price * item.quantity;
            seatTotal += subtotal;
            
            const li = document.createElement("li");
            li.className = "order-item";
            li.style.margin = "8px 0";
            
            const itemInfo = document.createElement("div");
            itemInfo.className = "order-item-info";
            
            const itemName = document.createElement("div");
            itemName.className = "order-item-name";
            itemName.textContent = item.name;
            
            const itemDetails = document.createElement("div");
            itemDetails.className = "order-item-details";
            itemDetails.textContent = `數量: ${item.quantity} | 單價: ${item.price} 元 | 小計: ${subtotal} 元`;
            
            itemInfo.appendChild(itemName);
            itemInfo.appendChild(itemDetails);
            li.appendChild(itemInfo);
            ordersList.appendChild(li);
        });
        
        const totalDiv = document.createElement("div");
        totalDiv.className = "seat-total";
        totalDiv.textContent = `小計: ${seatTotal} 元`;
        
        seatDiv.appendChild(seatTitle);
        seatDiv.appendChild(ordersList);
        seatDiv.appendChild(totalDiv);
        allDiv.appendChild(seatDiv);
    }
    
    const grandTotal = Object.values(orders).flat().reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (grandTotal > 0) {
        const grandTotalDiv = document.createElement("div");
        grandTotalDiv.style.cssText = "background: linear-gradient(45deg, #667eea, #764ba2); color: white; padding: 15px; border-radius: 8px; text-align: center; font-size: 1.2rem; font-weight: bold; margin-top: 20px;";
        grandTotalDiv.textContent = `總計: ${grandTotal} 元`;
        allDiv.appendChild(grandTotalDiv);
    }
}

// 清空所有訂單
function clearAllOrders() {
    const passwordInput = document.getElementById("admin-password");
    const password = passwordInput ? passwordInput.value : "";
    
    if (password !== ADMIN_PASSWORD) {
        showStatus("管理員密碼錯誤", 'error');
        return;
    }
    
    if (confirm("確定要清空所有訂單嗎？此操作無法復原！")) {
        ordersData = {};
        try {
            localStorage.removeItem("orders");
        } catch (e) {
            console.log("localStorage 操作失敗");
        }
        
        // 清空密碼輸入框
        if (passwordInput) {
            passwordInput.value = "";
        }
        
        showStatus("已清空所有訂單", 'success');
        
        const allDiv = document.getElementById("all-orders");
        if (allDiv) {
            allDiv.innerHTML = "<p style='text-align: center; color: #666;'>目前沒有任何訂單</p>";
        }
        
        if (currentSeat) {
            displaySeatOrders(currentSeat);
        }
    }
}

// DOM 載入完成後執行初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log("訂餐系統載入中...");
    
    // 嘗試載入保存的數據
    try {
        const savedOrders = localStorage.getItem("orders");
        if (savedOrders) {
            ordersData = JSON.parse(savedOrders);
        }
    } catch (e) {
        ordersData = {};
        console.log("載入保存的訂單失敗：", e);
    }
    
    // 綁定事件
    const confirmSeatBtn = document.getElementById('confirm-seat-btn');
    if (confirmSeatBtn) {
        confirmSeatBtn.onclick = loadSeatOrders;
    }
    
    const seatInput = document.getElementById('seat-number');
    if (seatInput) {
        seatInput.onkeypress = function(e) {
            if (e.key === 'Enter') {
                loadSeatOrders();
            }
        };
    }
    
    const restaurantSelect = document.getElementById('restaurant');
    if (restaurantSelect) {
        restaurantSelect.onchange = function() {
            showMenu(this.value);
        };
    }
    
    const viewOrdersBtn = document.getElementById('view-orders-btn');
    if (viewOrdersBtn) {
        viewOrdersBtn.onclick = viewAllOrders;
    }
    
    const clearOrdersBtn = document.getElementById('clear-orders-btn');
    if (clearOrdersBtn) {
        clearOrdersBtn.onclick = clearAllOrders;
    }
    
    const passwordInput = document.getElementById('admin-password');
    if (passwordInput) {
        passwordInput.onkeypress = function(e) {
            if (e.key === 'Enter') {
                viewAllOrders();
            }
        };
    }
    
    const confirmOrderBtn = document.getElementById('confirm-order-btn');
    if (confirmOrderBtn) {
        confirmOrderBtn.onclick = confirmAddOrder;
    }
    
    const cancelOrderBtn = document.getElementById('cancel-order-btn');
    if (cancelOrderBtn) {
        cancelOrderBtn.onclick = closeQuantityModal;
    }
    
    const closeModal = document.getElementById('close-modal');
    if (closeModal) {
        closeModal.onclick = closeQuantityModal;
    }
    
    const decreaseQtyBtn = document.getElementById('decrease-qty');
    if (decreaseQtyBtn) {
        decreaseQtyBtn.onclick = function() {
            changeQuantity(-1);
        };
    }
    
    const increaseQtyBtn = document.getElementById('increase-qty');
    if (increaseQtyBtn) {
        increaseQtyBtn.onclick = function() {
            changeQuantity(1);
        };
    }
    
    const quantityInput = document.getElementById('quantity-input');
    if (quantityInput) {
        quantityInput.oninput = updateSubtotal;
    }
    
    const modal = document.getElementById('quantity-modal');
    if (modal) {
        modal.onclick = function(e) {
            if (e.target === modal) {
                closeQuantityModal();
            }
        };
    }
    
    console.log("訂餐系統初始化完成");
});