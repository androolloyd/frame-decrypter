#

## 1. Installation

```
node i
```

## 2. Find your keystore file

As per the FAQ on Frame's Discord:

> Frame stores configuration locally on your machine at the following paths:
>
> on Linux: ~/.config/<app_name>
>
> on macOS: ~/Library/Application Support/<app_name>
>
> on Windows: %USERPROFILE%\AppData\Roaming\<app_name>
>
> Where app_name may be either “frame” or “frame-canary” depending on which version you’re using. In this directory you will find:
>
> A config.json that stores your settings and preferences. This file can be copied and saved to retain your settings when, for example, installing Frame on a different machine. Note that this file may contain the public addresses of accounts that you have configured but will never contain any sensitive data such as private keys, password or mnemonic seed phrases.
>
> A signers folder containing encrypted .json files with data about any hot signers you have configured. They contain the private keys for your hot signer(s), but are encrypted and can only be unlocked using the password you select when setting up the signer. These files are only stored locally and are never sent anywhere, and the keys cannot be decrypted unless you explicitly unlock them.

## 3. Copy paste its `encryptedKeys` string

Now pass that along with your (plaintext) password onto the script:

```
node ./decrypter.js <encryptedKeys> <password>
```
