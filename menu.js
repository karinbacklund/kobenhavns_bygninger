const burger = document.querySelector(".burger");
const navigation = document.querySelector(".menu");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  navigation.classList.toggle("active");
});
