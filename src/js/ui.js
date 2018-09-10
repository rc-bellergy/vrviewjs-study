console.log('Hello, ui.js');

window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {
  // Selector '#vrview' finds element with id 'vrview'.
  var vrView = new VRView.Player('#vrview', {
    width: 400,
    height:250,
    image: '/designquest-360/stereo-test.jpg',
    is_stereo: true,
    is_vr_off: false
  });
}