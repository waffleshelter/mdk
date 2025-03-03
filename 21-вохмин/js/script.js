// подгрузка данных в таблицу
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = 
    `
    <td data-label="Товар">${order.productName}</td>
    <td data-label="Артикул">${order.productArt}</td>
    <td data-label="Статус-оплаты">${order.orderStatus}</td>
    <td data-label="Статус-заказа" class="${
        order.paymentStatus=== 'Не оплачен' ? 'danger' :
        order.paymentStatus === 'В обработке' ? 'warning' :
        'success'}">${order.paymentStatus}</td>
    <td class="primary">Подробнее</td>
    `;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
}
)

// открытие меню
const sideMenu = document.querySelector('.left');

const menuBtn = document.querySelector('#menu-btn');

const closeBtn = document.querySelector('#close-btn');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// переключение темы

const themeToggler = document.querySelector('.theme-toggler');
themeToggler.addEventListener('click', () =>{
document.body.classList.toggle('dark-theme-variables');
themeToggler.querySelector('span:nth-child(1)').classList.toggle('on');
themeToggler.querySelector('span:nth-child(2)').classList.toggle('on');
})