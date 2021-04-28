import {GLTFLoader} from "./ThreeJS_resources/GLTFLoader.js";
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth/window.innerHeight,
    .01,
    1000
);
let renderer = new THREE.WebGLRenderer({antialias: true, autoSize: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let obj;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 100;
controls.maxDistance = 1000;

let loader = new GLTFLoader();
loader.load('model/airplanemodelfinal.gltf', (gltf) => {
    obj = gltf.scene;
    scene.add(gltf.scene);
});

scene.background = new THREE.Color(0x696969);

let light = new THREE.HemisphereLight(0xffffff, 0x000000, 7);
scene.add(light);
camera.position.set(0, 50, 250);
function animate(){
    requestAnimationFrame(animate);
    obj.rotation.y += 0.005;
    renderer.render(scene, camera);

    controls.update();
}
animate();