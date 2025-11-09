// Đợi cho toàn bộ nội dung HTML tải xong rồi mới chạy script
document.addEventListener("DOMContentLoaded", function () {
  // ======================= XỬ LÝ HEADER SCROLL =======================
  const header = document.getElementById("main-header");

  // Lắng nghe sự kiện cuộn trang (scroll) của cửa sổ
  window.addEventListener("scroll", function () {
    // window.scrollY là vị trí cuộn theo chiều dọc
    // Nếu cuộn xuống nhiều hơn 10px
    if (window.scrollY > 10) {
      header.classList.add("scrolled"); // Thêm class 'scrolled' vào header
    } else {
      header.classList.remove("scrolled"); // Xóa class 'scrolled'
    }
  });

  // ======================= XỬ LÝ SLIDER =======================
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentSlide = 0; // Biến theo dõi slide hiện tại (0 là slide 1, 1 là slide 2)
  const totalSlides = 2; // Tổng số slide

  // Hàm để di chuyển slider
  function moveToSlide(slideIndex) {
    // Di chuyển bằng cách thay đổi thuộc tính transform (translateX)
    // 0% cho slide 1, -50% cho slide 2
    sliderWrapper.style.transform = `translateX(-${slideIndex * 50}%)`;
  }

  // Khi bấm nút NEXT
  nextBtn.addEventListener("click", function () {
    currentSlide++; // Tăng chỉ số slide
    // Nếu đi quá slide cuối cùng (slide 1), quay về slide đầu (slide 0)
    if (currentSlide >= totalSlides) {
      currentSlide = 0;
    }
    moveToSlide(currentSlide);
  });

  // Khi bấm nút PREV
  prevBtn.addEventListener("click", function () {
    currentSlide--; // Giảm chỉ số slide
    // Nếu lùi quá slide đầu (slide 0), đi đến slide cuối (slide 1)
    if (currentSlide < 0) {
      currentSlide = totalSlides - 1;
    }
    moveToSlide(currentSlide);
  });
});
