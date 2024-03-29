import {GLTFLoader} from "./ThreeJS_resources/GLTFLoader.js";
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth/window.innerHeight,
    .000001,
    1000
);
let renderer = new THREE.WebGLRenderer({antialias: true, autoSize: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


window.onresize = function(){
    renderer.setSize(window.innerWidth, window.innerHeight);
}

let obj;
let flag = true;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 1;
controls.maxDistance = 500;

let loader = new GLTFLoader();

let modelloader = () => {
    loader.load('model/drone.gltf', (gltf) => {
        obj = gltf.scene;
        obj.name = "airplane";
        scene.add(obj);
    });
}

modelloader();


scene.background = new THREE.Color(0x696969);

let light = new THREE.DirectionalLight(0xffffff, 5);
let light2 = new THREE.HemisphereLight(0x000000, 0xffffff, 4);
scene.add(light);
scene.add(light2);
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
        scene.add(selected);
    }
    flag = !flag;
}

let btn = document.querySelector('#toggler');
btn.addEventListener('click', toggleEntity);


animate();