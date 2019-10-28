const scene = new THREE.Scene();
scene.background = new THREE.Color(0xc90843);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 2);
const material = new THREE.MeshBasicMaterial({ color: 0x2a3670 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 4;

cube.rotation.x = 1.45;
cube.rotation.y = -0.6;


function animate() {
  requestAnimationFrame(animate);

  Math.floor(Math.random() * Math.floor(10))

  processKeys();

  renderer.render(scene, camera);
}

function processKeys() {
  currentlyPressed.forEach(key => {
    switch (key) {
      case 40:
        console.log(cube.rotation.x);
        cube.rotation.x += 0.01;
        break;
      case 38:
        cube.rotation.x -= 0.01;
        break;
      case 39:
        cube.rotation.y += 0.01;
        break;
      case 37:
        cube.rotation.y -= 0.01;
        break;
    }
  })

  console.table({
    x: cube.rotation.x,
    y: cube.rotation.y,
  });
}

const currentlyPressed = new Set();

document.addEventListener('keyup', e => {
  currentlyPressed.delete(e.keyCode);
})

document.addEventListener('keydown', (e) => {
  currentlyPressed.add(e.keyCode);
})

animate();