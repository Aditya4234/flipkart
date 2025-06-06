const loginBtn = document.getElementById('loginBtn');
    const contactBtn = document.getElementById('contactUsBtn');

    loginBtn.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('loginModal').style.display = 'block';
    });

    contactBtn.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('contactModal').style.display = 'block';
    });

    window.onclick = function(event) {
      if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
      }
    };

    function closeModal(modalId) {
      document.getElementById(modalId).style.display = 'none';
    }