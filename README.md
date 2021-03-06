<p align="center" style="margin-bottom: 20px;">
  <a href="https://fingerprint.ninja"><img src="static/logo.png"/></a>
</p>

A [website](https://fingerprint.ninja) created to collect device information from clients. This repository is organised as a monolith, with all library, front and back-end code living in the same repository:

```
api/ - Serverless configuration files and AWS Lambda code
app/ - Front end i.e. render code for public site
lib/ - A library of javascript probes used to scrape data from clients
lib/vendor - Vendor scripts used in probes. Includes third party fingerprinting libraries
```

This site and accompanying libraries were written in pure (ES6) Javascript. The front-end application uses React, Redux and Redux-sagas (async operations), with Webpack to package and Babel to transpile (to browser compatible JS) the bundle. The API runs Node.js code on AWS Lambdas to save on running costs.

# About

I'm looking at [device fingerprinting](https://en.wikipedia.org/wiki/Device_fingerprint) for my masters project as part of my fourth year at Imperial College London studying Computing. I've written a library of probes based on as many common/recent [fingerprinting techniques](#Probes) as possible. Through collecting browser metrics from many clients, I aim to work towards an 'ideal' fingerprint and additionally measure the success of existing libraries.

I aim to provide an entropy (i.e. a measure of uniqueness) for each browser metric I probe.

# <a name="Probes"></a>Probes

Here is the current list of metrics I probe:

- Adblock detection
- `TODO` Audio and Video codec detection
- Cookies
  - Enabled?
  - `TODO` Supercookies
- CPU Information
  - Logical cores
  - `TODO` Math constants
- DevicePixelRatio
- DoNotTrack
- [Device memory](https://w3c.github.io/device-memory/)
- Fonts
  - Classic font detection (via [font-detect](http://www.lalit.org/lab/javascript-css-font-detect/) by Lalit Patel - included in `vendor/`) from pre-defined font list.
  - `TODO` Unicode glyph measurements
- Hardware detection
  - Accelerometer
  - `TODO` Camera
  - `TODO` Microphone
  - `TODO` Multi-monitor
  - Touchscreen + WebAPI metrics
- HTML Canvas - 2D
  - Alpha channel (transparency)
  - Arc
  - Bezier Curve
  - Composition modes:
  ```
  [ 'source-over', 'source-in', 'source-out', 'source-atop', 'destination-over', 'destination-in', 'destination-out', 'destination-atop', 'lighter', 'copy', 'xor', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity', ]
  ```
  - Image
  - Quadratic Curve
  - Radial Gradient
  - Basic text
  - Text with shadow
  - Transformations
  - Basic triangle
- Navigator object
- `TODO` Plugins
  - Internet Explorer specific
  - Non-IE
- Screen
  - Colour depth
  - Various dimension measurements
- Timezone
- [Modernizr](https://github.com/Modernizr/Modernizr) feature detection
- `TODO` WebGL - 3D
  - Clipping planes
  - Fragment shaders
  - Lighting and Shadow mapping
  - Pre-defined model renders
  - Vertex shaders
- `TODO` WebRTC
- WebStorage
  - `TODO: open()` IndexedDB
  - LocalStorage
  - SessionStorage
- `TODO` Writing script detection (i.e. OS level installed languages)

## Third party libraries

I have also included asynchronous calls to other fingerprinting libraries found in the public domain. I aim to test the effectiveness of these libraries and form comparisons relative to both my library and relative to other libraries:

- [fingerprintjs2](https://github.com/Valve/fingerprintjs2) - Valve (MIT)
- [clientjs](https://github.com/jackspirou/clientjs) - jackspirou (Apache)
