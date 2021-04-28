// creating a playground to add elements onto
const scene = new THREE.Scene();

// making a viewing port to see the scene
const camera = new THREE.PerspectiveCamera(
    75, // this tells how wide the viewing angle of camera is
    window.innerWidth/window.innerHeight, // this tells the aspect ratio of the scene 
    0.1, //this show closest to a view inside scene you can get
    1000 //this tells how far from a view inside the scene you can get
);

//making the renderer required to project objects onto the scene
const renderer = new THREE.WebGLRenderer();
// sets the size of the renderer to render scene onto the canvas with the specified size
renderer.setSize(window.innerWidth, window.innerHeight);
// appending the element to body
document.body.appendChild(renderer.domElement);

// creating figures to add to the scene
const geometry = new THREE.SphereGeometry(10, 10, 10);
const material = new THREE.MeshNormalMaterial({wireframe : true});

// helper loop to add multiple figures onto the scene
let spheres = [];
let initialPos = -40;
for(let i = 0;i <3; i++){
    let sphere = new THREE.Mesh(geometry, material);
    sphere.position.x = initialPos;
    initialPos += 40;
    spheres.push(sphere);
    scene.add(sphere);
}

camera.position.z = 70;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 1;
controls.maxDistance = 1000;



const animate = () => {
    requestAnimationFrame(animate);

    for(let sphere of spheres){
        sphere.rotation.x += 0.005;
        sphere.rotation.y += 0.005;
    }
    renderer.render(scene, camera);
    controls.update();
}

animate();