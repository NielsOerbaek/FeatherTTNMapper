# The Things Network node for TTNmapper or any other mapping service.
An arduino sketch for a TTN mapping node based on the Adafruit Feather M0

A slightly different version of [AmedeeBulle's TTN Mapper](https://github.com/AmedeeBulle/ttn-mapper). A full guide of assembly is found [here](https://www.hackster.io/Amedee/the-things-network-node-for-ttnmapper-with-gps-231ea1).

This version also sends the number of satelites in the payload.

The function in `TTN-decoder.js` is to be used as the decoder in the TTN console.

In order for this to work it's important to manually import the LMIC-library found [here](https://github.com/matthijskooijman/arduino-lmic). The ones in the Arduino library manager does not work.
You also need to rename ttn\_secrets\_template.h to ttn\_secrets.h and fill in your TTN-keys. 
_NOTE:_ The APP EUI and the DEV EUI need to be written in reverse byte order from how they are shown on the TTN console.
