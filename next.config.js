/** @type {import('next').NextConfig} */
const path = require('path')
module.exports = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['placeimg.com'],
  },
}


// "body-parser": "~1.17.1",
//     "cookie-parser": "~1.4.3",
//     "debug": "~2.6.3",
//     "express": "~4.15.2",
//     "jade": "~1.11.0",
//     "morgan": "~1.8.1",
//     "serve-favicon": "~2.4.2",
//     "mocha": "^3.5.0",
//     "mocha-junit-reporter": "^1.13.0",
//     "mocha-multi-reporters": "^1.1.4",
//     "chai": "^4.1.1",
//     "chai-as-promised": "^7.1.1",
//     "chai-http": "^3.0.0"



// "chai": "^4.1.2",
// "enzyme": "^3.2.0",
// "enzyme-adapter-react-16": "^1.1.0",
// "expect": "^21.2.1",
// "jest-junit": "^3.3.0",
// "react-test-renderer": "^16.2.0"