module.exports = function override(config, env) {
  console.log('React app rewired works!');
  config.resolve.fallback = {
    fs: false,
    path: false,
    querystring: false,
    http: false,
    https: false,
    timers: false,
    vm: false,
    stream: 'stream-browserify',
    buffer: false,
  };
  return config;
};
