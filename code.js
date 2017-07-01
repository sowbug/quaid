window.onload = function() {
  var key = document.getElementById('key');
  var plaintext = document.getElementById('plaintext');

  var success = function(text) {
    plaintext.innerText = text.data;
    key.style.display = 'none';
  };

  var failure = function(err) {
    console.log(err);
  };

  var handleBlur = function() {
    var options = {
      message: window.openpgp.message.readArmored(msg),
      password: key.value,
      format: 'utf8'
    };
    window.openpgp.decrypt(options).then(success, failure);
  };

  var handleKeydown = function(event) {
    if (event.keyCode == 13) {
      handleBlur();
    }
  };

  key.addEventListener('blur', handleBlur);
  key.addEventListener('keydown', handleKeydown);
  key.focus();
};
