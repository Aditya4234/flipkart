function app() {
  const loginBtn = document.getElementById("loginBtn");
  const loginModal = document.getElementById("loginModal");
  const closeBtn = document.querySelector(".closeBtn");

  loginBtn.addEventListener("click", function (e) {
    e.preventDefault(); 
    loginModal.style.display = "flex";
  });


  closeBtn.addEventListener("click", function () {
    loginModal.style.display = "none";
  });


  window.addEventListener("click", function (e) {
    if (e.target === loginModal) {
      loginModal.style.display = "none";
    }
  });
}

app();
