import React, { useRef } from 'react'
import { useMount } from 'react-use'
import * as PIXI from 'pixi.js'

const App = () => {
  const ref = useRef()
  useMount(() => {
    const app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      resolution: window.devicePixelRatio,
      autoDensity: true,
      antialias: true,
      transparent: true
    })
    ref.current.appendChild(app.view)
    const isoScalingContainer = new PIXI.Container()
    isoScalingContainer.scale.y = 0.5
    isoScalingContainer.position.set(app.screen.width / 2, app.screen.height / 2)
    app.stage.addChild(isoScalingContainer);
    const isometryPlane = new PIXI.Graphics()
    isometryPlane.rotation = Math.PI / 4
    isoScalingContainer.addChild(isometryPlane)
    isometryPlane.lineStyle(2, 0xffffff)
    for (let i = -100; i <= 100; i += 50) {
      isometryPlane.moveTo(-150, i)
      isometryPlane.lineTo(150, i)
      isometryPlane.moveTo(i, -150)
      isometryPlane.lineTo(i, 150)
    }
  })
  return <div ref={ ref } />
}

export default App
