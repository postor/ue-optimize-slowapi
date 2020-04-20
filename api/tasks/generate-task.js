module.exports = (miliseconds, result) => () => new Promise(
  resolve => setTimeout(() => resolve(result), miliseconds))