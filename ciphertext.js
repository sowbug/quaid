// For this sample, the passphrase is `correct horse battery staple`
// Generate yours with `gpg -c -a`
//
// Contributions welcome to automatically turn PGP message into
// JavaScript array

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
