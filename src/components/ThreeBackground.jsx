import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060a17, 0.015);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Particle System (Upward flowing starfield - Antigravity)
    const particleCount = 600;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const colorGold = new THREE.Color(0xf5a623);
    const colorBlue = new THREE.Color(0x1e90ff);
    const colorCyan = new THREE.Color(0x06b6d4);

    for (let i = 0; i < particleCount; i++) {
      // Spread in 3D box
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      // Color variation
      const r = Math.random();
      const mixedColor = r > 0.6 ? colorGold : r > 0.3 ? colorBlue : colorCyan;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;

      sizes[i] = Math.random() * 0.25 + 0.05;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle texture creator
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.4, 'rgba(255,255,255,0.8)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(16, 16, 16, 0, Math.PI * 2);
    ctx.fill();

    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.4,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particleSystem = new THREE.Points(geometry, particleMaterial);
    scene.add(particleSystem);

    // Floating 3D Geometric Objects (Constellation / Hexagons / Orbs)
    const group = new THREE.Group();
    scene.add(group);

    // Geometry 1: Outer Wireframe Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(8, 2);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x1e90ff,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    group.add(icoMesh);

    // Geometry 2: Floating Ring Orbits
    const ringGeo = new THREE.TorusGeometry(12, 0.04, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xf5a623,
      transparent: true,
      opacity: 0.3
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    group.add(ring2);

    // Geometry 3: Floating glowing spheres / nodes
    const nodeCount = 12;
    const nodes = [];
    const nodeGeo = new THREE.SphereGeometry(0.3, 16, 16);
    
    for (let i = 0; i < nodeCount; i++) {
      const nodeMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0xf5a623 : 0x1e90ff,
        wireframe: i % 3 === 0
      });
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 10 + Math.random() * 4;
      node.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 8,
        Math.sin(angle) * radius
      );
      group.add(node);
      nodes.push({ mesh: node, speed: 0.005 + Math.random() * 0.005, angle });
    }

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.001;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Mouse Interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Group Rotation & Movement
      group.rotation.y = elapsedTime * 0.08 + targetX * 2;
      group.rotation.x = Math.sin(elapsedTime * 0.05) * 0.1 + targetY * 2;

      ring1.rotation.z = elapsedTime * 0.1;
      ring2.rotation.z = -elapsedTime * 0.12;

      // Upward Floating Particles (Antigravity Defiance)
      const positionsAttr = particleSystem.geometry.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        let y = positionsAttr.getY(i);
        y += 0.04; // Flow upwards
        if (y > 30) y = -30; // Reset to bottom
        positionsAttr.setY(i, y);
      }
      positionsAttr.needsUpdate = true;

      // Rotate nodes around ring
      nodes.forEach((n) => {
        n.angle += n.speed;
        n.mesh.position.x = Math.cos(n.angle) * 12;
        n.mesh.position.z = Math.sin(n.angle) * 12;
        n.mesh.position.y += Math.sin(elapsedTime * 2 + n.angle) * 0.02;
      });

      // Camera parallax
      camera.position.x += (targetX * 5 - camera.position.x) * 0.05;
      camera.position.y += (-targetY * 5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    />
  );
}
