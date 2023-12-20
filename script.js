const container = document.querySelector(".faq-container");
const faqNode = document.querySelectorAll(".faq");

const faqArr = Array.from(faqNode);

faqArr.forEach((el) => {
  el.querySelector(".down").addEventListener("click", function (e) {
    el.classList.add("active");
  });
  el.querySelector(".close").addEventListener("click", function (e) {
    el.classList.remove("active");
  });
});
