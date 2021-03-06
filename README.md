# zilchpass
This is a CLI that uses [niceware](https://github.com/diracdeltas/niceware) to generate readable passwords or convert random bytes into a human-readable passphrase.

## Install
```
$ npm i -g zilchpass
```

## Usage
```
$ zilch --help

Usage
$ zilch domain <even-sized entropy> <joinChar> <clipboard-timeout-in-ms>
```
zilch "nothing," 1966, from earlier sense of "meaningless speech" (1960), originally Mr. Zilch, (1931) comic character in the magazine "Ballyhoo." Perhaps from U.S. college slang (early 1900s) Joe Zilsch "an insignificant person." Probably a nonsense syllable, but Zilch is an actual Ger. surname of Slavic origin.

## Sample use cases

* Zilchpass can be used to generate secure, semi-memorable, easy-to-type passphrases. A random 3-5 word phrase in Zilchpass is equivalent to a strong password for authentication to most online services. For instance, +8svofk0Y1o= and bacca cavort west volley are equally strong (64 bits of randomness).
* Zilchpass can be used to display cryptographic key material in a way that users can easily backup or copy between devices. For instance, the 128-bit random seed used to generate a 256-bit ECC key (~equivalent to a 3072-bit RSA key) is only 8 Niceware words. With this 8-word phrase, you can reconstruct the entire public/private keypair.

## Features

* generate human-readable passphrases
* secure clipboard clears after 5 seconds
* entropy pick
* choice of tie character

## Planned

* sharable through IPFS
* encrypted store over IPFS
* web thingy
* 2fa (heavy insecure, but 100% practical whenever you lost phone/token)
* PWA app
* optional use MiniLock for encryption
* cut dependencies
* [proquint - readable, spellable and pronunceable](https://github.com/deoxxa/proquint)

## Crypto

* BLAKE2b (or just [BLAKE2](https://blake2.net/))) is optimized for 64-bit platforms—including NEON-enabled ARMs—and produces digests of any size between 1 and 64 bytes

## Thanks

All credit goes to [yan](https://diracdeltas.github.io/) for creating [niceware](https://github.com/diracdeltas/niceware), the API for this module

## License

MIT Matej Nemcek
