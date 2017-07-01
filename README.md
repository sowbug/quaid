# Quaid
A single-page webapp that decrypts text using only client-side JavaScript.

# Demo
[Demo page](https://sowbug.github.io/quaid/). Enter the passphrase `correct horse battery staple` into the text box.

# Use case
Hopefully you're reading this before the following actually happens to you.

* You are a conscientious netizen and have set up all your critical internet accounts with two-factor authentication (2FA).
* You're on vacation, and [your Uber driver takes off with your electronics](https://fymhotsauce.rocks/blogs/news/my-uber-driver-robbed-me-so-i-took-uber-to-court-and-won).
* You purchase a replacement phone with the cash in your pocket, but you realize that you don't have the 2FA tokens needed to get back into your digital identity.

# Overview
* Create a text file containing your secrets -- [Google backup codes](https://support.google.com/accounts/answer/1187538?hl=en), Dropbox 2FA OTP secret, emergency phone numbers, etc.
* Encrypt the file using GPG's symmetric encryption (`gpg -c -a secrets.txt`).
* Adapt the resulting `secrets.txt.asc` to `ciphertext.js`.
* Use this project to generate a single-page webapp (`./build_spa`).
* Publish the resulting file, `docs/index.html`, on a webserver somwhere.
* Next time you lose your phone far from home, visit the site and decrypt with whatever passphrase you used to encrypt the file.

As long as you have access to a modern web browser, you should be able to recover
the text file. All you need to do is remember the URL and the passphrase.
Hopefully your URL was HTTPS so you know nobody messed with it in transit, and you control
the webserver so you can be confident nobody altered the resources at rest.

# Acknowledgements

* Thanks to https://github.com/openpgpjs/openpgpjs for the main functionality of this project.
* Inspired by the original version of the movie [Total Recall](http://www.imdb.com/title/tt0100802/). [Relevant scene](https://www.youtube.com/watch?v=a5ztlWzi0kY).
