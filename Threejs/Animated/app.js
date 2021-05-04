import {FBXLoader} from './ThreeJS_resources/FBXLoader.js';

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


window.onresize = function(){
    renderer.setSize(window.innerWidth, window.innerHeight);
}



let mixer;

let obj;
let flag = true;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 1;
controls.maxDistance = 500;

const fbxLoader = new FBXLoader();

fbxLoader.load(
    'models/drone_animated.fbx',
    (object) => {

        obj = object.scene;
        mixer = new THREE.AnimationMixer( object );

    const action = mixer.clipAction( object.animations[ 0 ] );
    action.play();

    object.traverse( function ( child ) {

        if ( child.isMesh ) {

            child.castShadow = true;
            child.receiveShadow = true;

        }

    } );

    scene.add( object );
    }
)

scene.background = new THREE.Color(0x696969);

let light = new THREE.DirectionalLight(0xffffff, 5);
let light2 = new THREE.HemisphereLight(0x000000, 0xffffff, 4);
scene.add(light);
scene.add(light2);
camera.position.set(0, 50, 250);
function animate(){
    requestAnimationFrame(animate);
    // obj.rotation.y += 0.003;
    renderer.render(scene, camera);

    controls.update();
}

animate();

// const loader = new FBXLoader();
// loader.load( 'models/fbx/Samba Dancing.fbx', function ( object ) {

    

// } );
