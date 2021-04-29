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
let flag = true;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 100;
controls.maxDistance = 1000;

let loader = new GLTFLoader();

let modelloader = () => {
    loader.load('model/airplanemodelfinal.gltf', (gltf) => {
        obj = gltf.scene;
        obj.name = "airplane";
        scene.add(obj);
    });
}

modelloader();


scene.background = new THREE.Color(0x696969);

let light = new THREE.HemisphereLight(0xffffff, 0x000000, 7);
scene.add(light);
camera.position.set(0, 50, 250);
function animate(){
    requestAnimationFrame(animate);
    obj.rotation.y += 0.003;
    renderer.render(scene, camera);

    controls.update();
}

let selected;

function toggleEntity(){
    if (flag){
        selected = scene.getObjectByName(obj.name);
        scene.remove(selected);
        animate();
    }
    else {
        console.log(selected);
    }
    flag = !flag;
}

let btn = document.querySelector('#toggler');
btn.addEventListener('click', toggleEntity);


animate();