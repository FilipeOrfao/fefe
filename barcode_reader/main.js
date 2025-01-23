const barcode = document.querySelector("#barcode");

barcode.innerText = 12342345235;

// function load_quagga() {
//   if (
//     $("#barcode-scanner").length > 0 &&
//     navigator.mediaDevices &&
//     typeof navigator.mediaDevices.getUserMedia === "function"
//   ) {
//   }
// }

const quaggaConf = {
  inputStream: {
    target: document.querySelector("#camera"),
    type: "LiveStream",
    constraints: {
      width: { min: 640 },
      height: { min: 480 },
      facingMode: "environment",
      aspectRatio: { min: 1, max: 2 },
    },
  },
  decoder: {
    readers: ["code_128_reader"],
  },
};

Quagga.init(quaggaConf, function (err) {
  if (err) {
    return console.log(err);
  }
  Quagga.start();
});

Quagga.onDetected(function (result) {
  // alert("Detected barcode: " + result.codeResult.code);
  barcode.innerText = result.codeResult.code;
});
