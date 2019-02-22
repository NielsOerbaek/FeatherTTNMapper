function Decoder(bytes, port) {
  // Decode an uplink message from a buffer
  // (array) of bytes to an object of fields.
  var decoded = {};
  if (port === 2) {
    // The port should match the port configured in `ttn_mapper.cpp`
    var i = 0;
    decoded.latitude = (bytes[i++]<<24) + (bytes[i++]<<16) + (bytes[i++]<<8) + bytes[i++];
    decoded.latitude = (decoded.latitude / 1e7) - 90;
    decoded.longitude = (bytes[i++]<<24) + (bytes[i++]<<16) + (bytes[i++]<<8) + bytes[i++];
    decoded.longitude = (decoded.longitude / 1e7) - 180;
    decoded.altitude = (bytes[i++]<<8) + bytes[i++];
    decoded.altitude = decoded.altitude - 0x7fff;
    decoded.hdop = (bytes[i++]<<8) + bytes[i++];
    decoded.hdop = decoded.hdop /10.0;
    decoded.sats = bytes[i++]
    if (bytes.length >= 15){
      decoded.voltage = ((bytes[i++]<<8)>>>0) + bytes[i++];
      decoded.voltage /= 100.0;
    }
  }
  return decoded;
}
