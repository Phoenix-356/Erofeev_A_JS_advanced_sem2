"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальное id, для упрощения, используем 
`Date.now()`.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
  {
    id: Date.now(),
    product: "Apple iPhone 13",
    reviews: [
      {
        id: Date.now(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: Date.now(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: Date.now(),
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: Date.now(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: Date.now(),
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: Date.now(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

// Функция для отображения товаров и отзывов
function renderProducts(data) {
  const app = document.getElementById('app');
  data.forEach(product => {
    const container = document.createElement('div');
    container.classList.add('reviews-container');
    container.innerHTML = `
      <h3>${product.product}</h3>
      <ul>
        ${product.reviews.map(review => `<li>${review.text}</li>`).join('')}
      </ul>
      <form class="review-form">
        <input type="text" class="review-input" placeholder="Добавить отзыв">
        <button type="submit">Отправить</button>
        <div class="error-message"></div>
      </form>
    `;
    app.appendChild(container);

    const reviewForm = container.querySelector('.review-form');
    reviewForm.addEventListener('submit', e => {
      e.preventDefault();
      const input = reviewForm.querySelector('.review-input');
      const errorMessage = reviewForm.querySelector('.error-message');
      const reviewText = input.value.trim();
      if (reviewText.length < 50 || reviewText.length > 500) {
        errorMessage.textContent = 'Отзыв должен содержать от 50 до 500 символов.';
        return;
      }
      errorMessage.textContent = '';
      const newReview = {
        id: Date.now(),
        text: reviewText
      };
      product.reviews.push(newReview);
      renderProducts(initialData); // Обновляем отображение после добавления отзыва
      input.value = ''; // Очищаем поле ввода
    });
  });
}

// Инициализация
renderProducts(initialData);