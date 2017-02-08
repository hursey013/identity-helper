chrome.storage.sync.get({recoveryCode: true}, function(items) {
  if (items.recoveryCode) {
    var words = [].slice.call(document.querySelectorAll('[data-recovery=word]'));
    var form = document.getElementById('confirm-key');
    var submit = document.querySelector('[type=submit]');
    
    if (words && form && submit) {
      submit.addEventListener('click', function() {
        for (x in words) {
          if (form[x].type === 'text') {
            form[x].value = words[x].textContent;
          }
        }
      });
    }
  }
});
