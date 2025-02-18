/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const config = {
    output: "standalone",
};

module.exports = withNextIntl(config);
