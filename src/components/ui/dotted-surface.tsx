"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const CHAMPAGNE = { r: 200 / 255, g: 169 / 255, b: 106 / 255 };
const BRONZE = { r: 168 / 255, g: 121 / 255, b: 61 / 255 };
const OFF_WHITE = { r: 232 / 255, g: 226 / 255, b: 214 / 255 };
const TARGET_FRAME_TIME = 1000 / 30;
const CURSOR_RADIUS = 2.15;
const CURSOR_PUSH = 0.12;
const CURSOR_LIFT = 0.085;

export function DottedSurface() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile =
      window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches;
    const columns = isMobile ? 50 : 76;
    const rows = isMobile ? 32 : 48;
    const pointCount = columns * rows;
    const positions = new Float32Array(pointCount * 3);
    const basePositions = new Float32Array(pointCount * 3);
    const baseHeights = new Float32Array(pointCount);
    const colors = new Float32Array(pointCount * 3);
    const baseColors = new Float32Array(pointCount * 3);

    let pointIndex = 0;
    for (let row = 0; row < rows; row += 1) {
      const rowProgress = row / (rows - 1);

      for (let column = 0; column < columns; column += 1) {
        const columnProgress = column / (columns - 1);
        const offset = pointIndex * 3;
        const x = (columnProgress - 0.5) * 15;
        const z = (rowProgress - 0.5) * 10;
        const baseHeight =
          Math.sin(x * 0.55) * 0.08 + Math.cos(z * 0.7) * 0.06;
        const colorMix =
          0.2 +
          0.55 *
            Math.max(
              0,
              Math.sin(column * 0.61 + row * 0.37) * 0.5 + 0.5,
            );

        positions[offset] = x;
        positions[offset + 1] = baseHeight;
        positions[offset + 2] = z;
        basePositions[offset] = x;
        basePositions[offset + 1] = baseHeight;
        basePositions[offset + 2] = z;
        baseHeights[pointIndex] = baseHeight;
        colors[offset] = BRONZE.r + (CHAMPAGNE.r - BRONZE.r) * colorMix;
        colors[offset + 1] =
          BRONZE.g + (CHAMPAGNE.g - BRONZE.g) * colorMix;
        colors[offset + 2] =
          BRONZE.b + (CHAMPAGNE.b - BRONZE.b) * colorMix;
        baseColors[offset] = colors[offset];
        baseColors[offset + 1] = colors[offset + 1];
        baseColors[offset + 2] = colors[offset + 2];
        pointIndex += 1;
      }
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.085);

    const camera = new THREE.PerspectiveCamera(
      42,
      window.innerWidth / window.innerHeight,
      0.1,
      40,
    );
    camera.position.set(0, 4.6, 7.8);
    camera.lookAt(0, -0.75, -0.8);

    const geometry = new THREE.BufferGeometry();
    const positionAttribute = new THREE.BufferAttribute(positions, 3);
    const colorAttribute = new THREE.BufferAttribute(colors, 3);
    positionAttribute.setUsage(THREE.DynamicDrawUsage);
    colorAttribute.setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute("position", positionAttribute);
    geometry.setAttribute("color", colorAttribute);

    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.045 : 0.038,
      sizeAttenuation: true,
      transparent: true,
      opacity: reducedMotion ? (isMobile ? 0.34 : 0.16) : isMobile ? 0.4 : 0.23,
      vertexColors: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      fog: true,
    });

    const surface = new THREE.Points(geometry, material);
    surface.position.y = -1.35;
    scene.add(surface);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: "low-power",
      });
    } catch {
      geometry.dispose();
      material.dispose();
      return;
    }

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.className = "block h-full w-full";
    container.appendChild(renderer.domElement);

    let animationFrame = 0;
    let resizeFrame = 0;
    let previousFrameTime = 0;
    let elapsed = 0;
    let targetScrollDepth = 0;
    let scrollDepth = 0;
    let targetCursorStrength = 0;
    let cursorStrength = 0;
    let colorsDirty = false;
    const pointerTarget = new THREE.Vector2(0, 0.15);
    const pointerCurrent = new THREE.Vector2(0, 0.15);
    const raycaster = new THREE.Raycaster();
    const interactionPlane = new THREE.Plane(
      new THREE.Vector3(0, 1, 0),
      -surface.position.y,
    );
    const cursorPoint = new THREE.Vector3();
    const hasFinePointer =
      !isMobile && window.matchMedia("(pointer: fine)").matches;

    const updateScrollDepth = () => {
      targetScrollDepth = Math.min(
        1,
        window.scrollY / Math.max(window.innerHeight * 2.4, 1),
      );
    };

    const updatePointer = (event: PointerEvent) => {
      pointerTarget.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1,
      );
      targetCursorStrength = 1;
    };

    const releasePointer = () => {
      targetCursorStrength = 0;
    };

    const render = (time: number) => {
      animationFrame = window.requestAnimationFrame(render);
      if (time - previousFrameTime < TARGET_FRAME_TIME) {
        return;
      }

      const deltaSeconds =
        previousFrameTime === 0
          ? TARGET_FRAME_TIME / 1000
          : Math.min((time - previousFrameTime) / 1000, 0.1);
      previousFrameTime = time;
      elapsed += deltaSeconds;
      pointerCurrent.lerp(pointerTarget, 0.075);
      cursorStrength = THREE.MathUtils.lerp(
        cursorStrength,
        targetCursorStrength,
        0.08,
      );
      scrollDepth = THREE.MathUtils.lerp(scrollDepth, targetScrollDepth, 0.055);

      surface.position.y = -1.35 + scrollDepth * 0.11;
      surface.position.z = -scrollDepth * 0.12;
      const heroOpacity = isMobile ? 0.4 : 0.23;
      const lowerSectionOpacity = isMobile ? 0.28 : 0.135;
      material.opacity = THREE.MathUtils.lerp(
        material.opacity,
        THREE.MathUtils.lerp(
          heroOpacity,
          lowerSectionOpacity,
          scrollDepth,
        ),
        0.06,
      );

      interactionPlane.constant = -surface.position.y;
      raycaster.setFromCamera(pointerCurrent, camera);
      const hasCursorPoint =
        cursorStrength > 0.002 &&
        raycaster.ray.intersectPlane(interactionPlane, cursorPoint) !== null;
      const updateCursorColors = hasCursorPoint;
      const resetCursorColors = !updateCursorColors && colorsDirty;

      for (let index = 0; index < pointCount; index += 1) {
        const offset = index * 3;
        const baseX = basePositions[offset];
        const baseZ = basePositions[offset + 2];
        const wave =
          Math.sin(baseX * 0.68 + elapsed * 0.34) * 0.048 +
          Math.cos(baseZ * 0.86 + elapsed * 0.28) * 0.036 +
          Math.sin((baseX + baseZ) * 0.34 + elapsed * 0.2) * 0.018;
        let cursorInfluence = 0;
        let targetX = baseX;
        let targetZ = baseZ;

        if (hasCursorPoint) {
          const deltaX = baseX - cursorPoint.x;
          const deltaZ = baseZ - (cursorPoint.z - surface.position.z);
          const distance = Math.hypot(deltaX, deltaZ);

          if (distance < CURSOR_RADIUS) {
            const normalized = 1 - distance / CURSOR_RADIUS;
            cursorInfluence =
              normalized * normalized * (3 - 2 * normalized) * cursorStrength;
            const inverseDistance = 1 / Math.max(distance, 0.2);
            targetX += deltaX * inverseDistance * CURSOR_PUSH * cursorInfluence;
            targetZ += deltaZ * inverseDistance * CURSOR_PUSH * cursorInfluence;
          }
        }

        positions[offset] = THREE.MathUtils.lerp(
          positions[offset],
          targetX,
          0.11,
        );
        positions[offset + 1] = THREE.MathUtils.lerp(
          positions[offset + 1],
          baseHeights[index] +
            wave +
            cursorInfluence * CURSOR_LIFT,
          0.12,
        );
        positions[offset + 2] = THREE.MathUtils.lerp(
          positions[offset + 2],
          targetZ,
          0.11,
        );

        if (updateCursorColors) {
          const brightness = cursorInfluence * 0.24;
          colors[offset] = THREE.MathUtils.lerp(
            baseColors[offset],
            OFF_WHITE.r,
            brightness,
          );
          colors[offset + 1] = THREE.MathUtils.lerp(
            baseColors[offset + 1],
            OFF_WHITE.g,
            brightness,
          );
          colors[offset + 2] = THREE.MathUtils.lerp(
            baseColors[offset + 2],
            OFF_WHITE.b,
            brightness,
          );
        } else if (resetCursorColors) {
          colors[offset] = baseColors[offset];
          colors[offset + 1] = baseColors[offset + 1];
          colors[offset + 2] = baseColors[offset + 2];
        }
      }

      positionAttribute.needsUpdate = true;
      if (updateCursorColors || resetCursorColors) {
        colorAttribute.needsUpdate = true;
        colorsDirty = updateCursorColors;
      }
      renderer.render(scene, camera);
    };

    const startAnimation = () => {
      if (!reducedMotion && animationFrame === 0) {
        previousFrameTime = 0;
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    const stopAnimation = () => {
      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
      } else {
        startAnimation();
      }
    };

    const handleResize = () => {
      if (resizeFrame !== 0) {
        window.cancelAnimationFrame(resizeFrame);
      }

      resizeFrame = window.requestAnimationFrame(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);
        updateScrollDepth();
        renderer.render(scene, camera);
        resizeFrame = 0;
      });
    };

    window.addEventListener("resize", handleResize, { passive: true });
    updateScrollDepth();

    if (reducedMotion) {
      renderer.render(scene, camera);
    } else {
      window.addEventListener("scroll", updateScrollDepth, { passive: true });
      document.addEventListener("visibilitychange", handleVisibilityChange);
      if (hasFinePointer) {
        window.addEventListener("pointermove", updatePointer, { passive: true });
        document.documentElement.addEventListener(
          "pointerleave",
          releasePointer,
          { passive: true },
        );
        window.addEventListener("blur", releasePointer);
      }
      startAnimation();
    }

    return () => {
      stopAnimation();
      window.cancelAnimationFrame(resizeFrame);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", updateScrollDepth);
      window.removeEventListener("pointermove", updatePointer);
      document.documentElement.removeEventListener(
        "pointerleave",
        releasePointer,
      );
      window.removeEventListener("blur", releasePointer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      scene.remove(surface);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 opacity-90 sm:opacity-70"
    />
  );
}
