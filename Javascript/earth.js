const convertToRadian = (num) => num * 0.0174532925;

const transformAnimation = (initialGeometry, targetGeometry, meshName, scene, isMobile) => {
    let duration = isMobile ? 1000 : 1200;
    let frame = isMobile ? 40 : 30;
    let limit = (duration / frame);

    let initialPositions = [...initialGeometry.attributes.position.array];
    let initialColors = [...initialGeometry.attributes.color.array];

    let targetPositions = [...targetGeometry.attributes.position.array];
    let targetColors = [...targetGeometry.attributes.color.array];

    let geometryPositions = initialPositions;
    let geometryColors = initialColors;

    if (initialPositions.length > targetPositions.length) {
        geometryPositions = geometryPositions.slice(0, targetPositions.length);
        geometryColors = geometryColors.slice(0, targetColors.length);
    }
    else {
        let diff = targetPositions.length - initialPositions.length;
        for(let i = 0; i < diff; i++){
            geometryPositions.push(Math.random());
            geometryColors.push(0);
        }
    }

    let stepPositions = [];
    let stepColors = [];

    for (let i = 0; i < geometryPositions.length; i++) {
        stepPositions.push((targetPositions[i] - geometryPositions[i]) / duration * frame);
        stepColors.push((targetColors[i] - geometryColors[i]) / duration * frame);
    }

    let timer;
    let i = 0;
    timer = setInterval(() => {
        let before = scene.getObjectByName(meshName);
        before.geometry.dispose();
        before.material.dispose();
        scene.remove(before);
        if (i >= limit) {
            const geometry = new THREE.BufferGeometry();
            geometry.addAttribute('position', new THREE.BufferAttribute(new Float32Array(targetPositions), 3));
            geometry.addAttribute('color', new THREE.BufferAttribute(new Float32Array(targetColors), 3));
            const material = new THREE.PointsMaterial({
                size: 0.05,
                vertexColors: THREE.VertexColors,
            });
            const mesh = new THREE.Points(geometry, material);
            mesh.name = meshName;
            scene.add(mesh);
            clearInterval(timer);
            return;
        } else {
            for (let i = 0; i < geometryPositions.length; i++) {
                geometryPositions[i] += stepPositions[i];
                geometryColors[i] += stepColors[i];
            }
            const geometry = new THREE.BufferGeometry();
            geometry.addAttribute('position', new THREE.BufferAttribute(new Float32Array(geometryPositions), 3));
            geometry.addAttribute('color', new THREE.BufferAttribute(new Float32Array(geometryColors), 3));
            const material = new THREE.PointsMaterial({
                size: 0.05,
                vertexColors: THREE.VertexColors,
            });
            const mesh = new THREE.Points(geometry, material);
            mesh.name = meshName;
            scene.add(mesh);
        }
        i++;
    }, frame);
}

let morph = 0 / 8;
const createCubeGeometry = (width, numPoints) => {
    let positions = [];
    let colors = [];
    let min = -width / 2;
    let max = width / 2;

    let step = Math.sqrt(6 / numPoints) * width

    for (let x = min; x <= max; x += width) {
        for (let y = min; y < max; y += step) {
            for (let z = min; z < max; z += step) {
                positions.push(...[x + Math.random() * morph, y, z]);
            }
        }
    }

    for (let y = min; y <= max; y += width) {
        for (let x = min; x < max; x += step) {
            for (let z = min; z < max; z += step) {
                positions.push(...[x, y + Math.random() * morph, z]);
            }
        }
    }

    for (let z = min; z <= max; z += width) {
        for (let y = min; y < max; y += step) {
            for (let x = min; x < max; x += step) {
                positions.push(...[x, y, z + Math.random() * morph]);
            }
        }
    }

    for (let i = 0; i < positions.length / 3; i++) {
        colors.push(...[positions[i * 3] / (max), positions[i * 3 + 1] / max, positions[i * 3 + 2] / max])
    }

    const geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
    geometry.addAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3));
    return geometry;
}

const createSphereGeometry = (radius, numPoints) => {
    let positions = [];
    let colors = [];
    let step = Math.sqrt(64800 / numPoints)
    for (let theta = 0; theta < 180; theta += step) {
        for (let phi = 0; phi < 360; phi += step) {
            let x = (radius * Math.sin(convertToRadian(theta)) * Math.cos(convertToRadian(phi))) + Math.random() * morph;
            let y = (radius * Math.sin(convertToRadian(theta)) * Math.sin(convertToRadian(phi))) + Math.random() * morph;
            let z = (radius * Math.cos(convertToRadian(theta))) + Math.random() * morph
            positions.push(...[x, y, z])
        }
    }
    for (let i = 0; i < positions.length / 3; i++) {
        colors.push(...[positions[i * 3] / radius, positions[i * 3 + 1] / radius, positions[i * 3 + 2] / radius])
    }

    const geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
    geometry.addAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3));
    return geometry;
}
const rootDiv = document.getElementById("root");
const meshName = 'mesh'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  30
);
const renderer = new THREE.WebGLRenderer();
const render = () => renderer.render(scene, camera);
const controls = new THREE.OrbitControls(camera, rootDiv);

const isMobile = window.innerWidth < 768;
const initialSphereGeometry = createSphereGeometry(isMobile ? 4 : 5, isMobile ? 2000 : 8192);
const initialCubeGeometry = createCubeGeometry(isMobile ? 4 : 6 ,isMobile ? 2000 : 8664);
let currentGeometry = 'sphere';

const initialCamera = () => {
  camera.position.z = 6;
  camera.position.x = 10;
  camera.position.y = 4;
  camera.lookAt(0, 0, 0);
};

const initialScene = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio * 1.5);
  rootDiv.appendChild(renderer.domElement);
  initialCamera();

  let geometry = initialSphereGeometry;
  const material = new THREE.PointsMaterial({ 
    size: 0.05,
    vertexColors: THREE.VertexColors,
  });
  const mesh = new THREE.Points(geometry, material);
  mesh.name = meshName;
  scene.add(mesh);

};
const animate = () => {
  requestAnimationFrame(animate);
  render();
};
// const rotate = () =>{
    
//     for(var i = 1; i > timer.seconds; i++){
        
//     }
// }

const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio * 1.5);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

initialScene();
animate();
window.addEventListener("resize", resize);

document.getElementById('btn_transform').addEventListener('click',()=>{
  debugger
  if(currentGeometry === 'cube'){
    currentGeometry ='sphere';
    transformAnimation(initialCubeGeometry,initialSphereGeometry,meshName,scene,isMobile);
    // rotate(); 
  }
  else if(currentGeometry === 'sphere'){
    currentGeometry = 'cube';
    transformAnimation(initialSphereGeometry,initialCubeGeometry,meshName,scene,isMobile);
  }
})
