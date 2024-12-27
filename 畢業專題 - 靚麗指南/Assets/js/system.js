let currentIndex = 0;

function moveSlide(direction) {
  const carousel = document.getElementById("carousel");
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;

  // 計算新的索引
  currentIndex = (currentIndex + direction + totalItems) % totalItems;

  // 移動至新位置
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}
