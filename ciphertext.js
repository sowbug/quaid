// For this sample, the passphrase is `correct horse battery staple`
// Generate yours as follows:
//
// Put secrets in plaintext.txt
// `gpg -c -a plaintext.txt`
// `< plaintext.txt.asc ./asc_to_js > ciphertext.js`

var msg = [
  '-----BEGIN PGP MESSAGE-----',
  'Version: GnuPG v1',
  'Comment: GPGTools - http://gpgtools.org',
  '',
  'jA0EBwMCMhv12a8bKDdg0koBII74j+np9e6ZGU2du6hEZdc0VCXzmNCHAOO1EEaW',
  'vuZZPIP2G9A+fYUvT1RfzlRSaujj5Mf/RhzmXx9Hp0hWoKXlPAcXQnv+ZQ==',
  '=vFcX',
  '-----END PGP MESSAGE-----'
].join('\n');
