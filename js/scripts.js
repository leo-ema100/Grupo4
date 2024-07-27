function navigateTo(view) {
    window.location.href = view;
  }
  
  $(document).ready(function() {
    $('.nav-link').on('click', function() {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });
});

// script.js
document.getElementById('openPdfButton').addEventListener('click', function() {
  window.location.href = 'pdf/CV.pdf';
});

