var sleep = {
  sync: function sleepSync(milliseconds) {
    var sab = new SharedArrayBuffer(4);
    var view = new Int32Array(sab);
    Atomics.wait(view, 0, 0, milliseconds);
  },
  async: function (milliseconds) {
    return new Promise(function (resolve) {
      setTimeout(resolve, milliseconds);
    });
  },
};

module.exports = { sleep };
