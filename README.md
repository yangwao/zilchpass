# zilchpass
This is a CLI that uses [niceware](https://github.com/diracdeltas/niceware) to generate readable passwords or convert random bytes into a passphrase.

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

## Planned

* sharable through IPFS
* encrypted store over IPFS
* web thingy
* 2fa token (yop heavy insecure, but 100% practical whenever you lost phone)
* PWA app
* cut dependencies

## Thanks

All credit goes to [yan](https://diracdeltas.github.io/) for creating [niceware](https://github.com/diracdeltas/niceware), the API for this module

## License

MIT Matej Nemcek
