// Saves options to chrome.storage.sync.
function save_options() {
  var recoveryCode = document.getElementById('recovery_code').checked;
  chrome.storage.sync.set({
    recoveryCode: recoveryCode
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    recoveryCode: true
  }, function(items) {
    document.getElementById('recovery_code').checked = items.recoveryCode;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
