class Logger {
  devMode = __DEV__;
  log(...message) {
    if (this.devMode) {
      console.log(...message);
    }
  }
}
export default new Logger();
