/*
  Logo Model Private Hooks.
*/

import { useRef, useEffect, RefObject } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { StoreTypes } from '@/types/type'
import {
  WebGLRenderer,
  TextureLoader,
  Texture,
  RepeatWrapping,
  Scene,
  PerspectiveCamera,
  Group,
  Mesh,
  PlaneGeometry,
  MeshLambertMaterial,
  DoubleSide,
  SpriteMaterial,
  AdditiveBlending,
  SphereGeometry,
  DirectionalLight,
  SpotLight,
  PointLight,
  AmbientLight,
  OrthographicCamera,
  AxesHelper,
  GridHelper,
  CameraHelper,
  DirectionalLightHelper,
  SpotLightHelper,
  PointLightHelper,
  PCFShadowMap,
  Vector3,
  Vector2,
  Sprite
} from 'three'
import { OrbitControls } from 'three-stdlib/controls/OrbitControls'
import { GLTFLoader } from 'three-stdlib/loaders/GLTFLoader'
import { DRACOLoader } from 'three-stdlib/loaders/DRACOLoader'

const renderCore = (): {
  renderer: WebGLRenderer
  setModel: (visited: boolean) => void
  removeModel: () => void
  responsive: () => void
} => {
  // Switches for Debug.
  const switches = {
    launchModel: true,
    launchModelRotation: true,
    launchHelper: false,
    launchEachHelper: {
      axes: true,
      grid: true,
      camera: true,
      topLight: true,
      bottomLight: true,
      spotLight: true,
      pointLight: true
    },
    launchDummySphere: false
  }

  // Required Materials.
  const materials: { modelPath: string; texturePath: string[] } = {
    modelPath: `${process.env.basePath ? process.env.basePath : ''}/gltf/logoModel.gltf`,
    texturePath: [
      `${process.env.basePath ? process.env.basePath : ''}/images/texture_gray.jpg`,
      `${process.env.basePath ? process.env.basePath : ''}/images/texture_black.jpg`,
      `${process.env.basePath ? process.env.basePath : ''}/images/bomb.png`
    ]
  }

  // For Canvas Size.
  const sceneSize = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  // Loader Instance.
  const threeLoader = (): {
    gltfLoader: GLTFLoader
    textureLoader: TextureLoader
  } => {
    const gltfLoader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('three/examples/js/libs/draco/')
    gltfLoader.setDRACOLoader(dracoLoader)
    const textureLoader = new TextureLoader()
    return { gltfLoader, textureLoader }
  }
  const { gltfLoader, textureLoader } = threeLoader()

  // Initial Texture Setup for Mesh Instance.
  const initialTextureSetup = (): Texture[] => {
    const texture = materials.texturePath.map((info, index) => {
      const generateTexture = textureLoader.load(info)
      if (index !== 2) {
        generateTexture.wrapS = RepeatWrapping
        generateTexture.wrapT = RepeatWrapping
        generateTexture.repeat.set(100, 100)
      }
      return generateTexture
    })
    return texture
  }
  const texture = initialTextureSetup()

  // Each Instance.
  const threeInstance = (): {
    renderer: WebGLRenderer
    scene: Scene
    camera: PerspectiveCamera
    model: Group
    meshGray: Mesh
    meshBlack: Mesh
    spriteMaterial: SpriteMaterial
    orbitControls: OrbitControls
    sphere: Mesh
  } => {
    const renderer = new WebGLRenderer({ antialias: true, alpha: true })
    const scene = new Scene()
    const camera = new PerspectiveCamera(45, sceneSize.width / sceneSize.height, 1, 1000)
    const model = new Group()
    const meshGray = new Mesh(new PlaneGeometry(250, 250), new MeshLambertMaterial({ map: texture[0], side: DoubleSide }))
    const meshBlack = new Mesh(new PlaneGeometry(250, 250), new MeshLambertMaterial({ map: texture[1], side: DoubleSide }))
    const spriteMaterial = new SpriteMaterial({ blending: AdditiveBlending, map: texture[2] })
    const orbitControls = new OrbitControls(camera, renderer.domElement)
    const sphere = new Mesh(new SphereGeometry(0.5, 50, 50), new MeshLambertMaterial({ color: 0x8dc3ff }))
    return { renderer, scene, camera, model, meshGray, meshBlack, spriteMaterial, orbitControls, sphere }
  }
  const { renderer, scene, camera, model, meshGray, meshBlack, spriteMaterial, orbitControls, sphere } = threeInstance()

  // Light Instance.
  const threeLight = (): {
    directionalLightTop: DirectionalLight
    directionalLightBottom: DirectionalLight
    spotLight: SpotLight
    pointLight: PointLight
    ambientLight: AmbientLight
  } => {
    const directionalLightTop = new DirectionalLight(0xffffff, 1)
    const directionalLightBottom = new DirectionalLight(0xffffff, 1)
    const spotLight = new SpotLight(0xffffff, 1)
    const pointLight = new PointLight(0xffffff, 2, 50, 1.0)
    const ambientLight = new AmbientLight(0xffffff, 0.5)
    directionalLightTop.shadow.camera = new OrthographicCamera(1, 1, 1, 1)
    return { directionalLightTop, directionalLightBottom, spotLight, pointLight, ambientLight }
  }
  const { directionalLightTop, directionalLightBottom, spotLight, pointLight } = threeLight()

  // Helper Instance.
  const threeHelper = (): {
    axesHelper: AxesHelper
    gridHelper: GridHelper
    cameraHelper: CameraHelper
    directionalLightTopHelper: DirectionalLightHelper
    directionalLightBottomHelper: DirectionalLightHelper
    spotLightHelper: SpotLightHelper
    pointLightHelper: PointLightHelper
  } => {
    const axesHelper = new AxesHelper(1000)
    const gridHelper = new GridHelper(250, 20, '#000000', '#9a12b3')
    const cameraHelper = new CameraHelper(camera)
    const directionalLightTopHelper = new DirectionalLightHelper(directionalLightTop, 10, '#FFF100')
    const directionalLightBottomHelper = new DirectionalLightHelper(directionalLightBottom, 10, '#FFF100')
    const spotLightHelper = new SpotLightHelper(spotLight, '#f15a22')
    const pointLightHelper = new PointLightHelper(pointLight, 1, '#db0a5b')
    return { axesHelper, gridHelper, cameraHelper, directionalLightTopHelper, directionalLightBottomHelper, spotLightHelper, pointLightHelper }
  }
  const { axesHelper, gridHelper, cameraHelper, directionalLightTopHelper, directionalLightBottomHelper, spotLightHelper, pointLightHelper } = threeHelper()

  /*
     Add Setting Below.
  */
  // Renderer.
  renderer.setSize(sceneSize.width, sceneSize.height)
  renderer.setClearColor(0x000000, 0)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = PCFShadowMap

  // Camera.
  sceneSize.width <= 767 ? camera.position.set(10, 3.5, 0) : camera.position.set(2, 4, 2)

  // 3D Model.
  if (switches.launchModel) {
    gltfLoader.load(materials.modelPath, (gltf) => {
      model.add(gltf.scene)
      model.traverse((info) => {
        if (info.type === 'Mesh') {
          info.castShadow = true
          info.receiveShadow = true
        }
      })
      scene.add(model)
    })
  }

  // Mesh Texture.
  if (sceneSize.width <= 767) {
    meshGray.rotation.set(Math.PI / 2, 0, 0)
    meshBlack.rotation.set(Math.PI / 2, 0, Math.PI / 4)
  } else {
    meshGray.rotation.set(Math.PI / 2, 0, Math.PI / 4)
    meshBlack.rotation.set(Math.PI / 2, 0, 0)
  }
  meshGray.position.set(0, -3.5, 0)
  meshBlack.position.set(0, -3.6, 0)
  meshGray.receiveShadow = true
  meshBlack.receiveShadow = false
  scene.add(meshGray)
  scene.add(meshBlack)

  // Light.
  directionalLightTop.position.set(0, 10, 0)
  directionalLightTop.castShadow = true
  scene.add(directionalLightTop)
  directionalLightBottom.position.set(0, -10, 0)
  directionalLightBottom.castShadow = false
  scene.add(directionalLightBottom)
  spotLight.position.set(0, 10, 0)
  spotLight.castShadow = true
  spotLight.shadow.mapSize.width = 4096
  spotLight.shadow.mapSize.height = 4096
  scene.add(spotLight)

  // Orbit Controls.
  orbitControls.enabled = false
  orbitControls.enableDamping = true
  orbitControls.zoomSpeed = 0.5
  orbitControls.maxDistance = 800
  orbitControls.autoRotate = true
  orbitControls.autoRotateSpeed = -1 // .autoRotate's Left Rotation by Default, Right Rotation by Setting .autoRotateSpeed to Negative Value.

  // Model's Rotation Loop.
  const modelLoop = (): void => {
    if (switches.launchModel && switches.launchModelRotation) {
      const duration = 0.01
      const rotateX = model.rotation.x + duration
      const rotateY = model.rotation.y + duration
      const rotateZ = model.rotation.z + duration
      model.rotation.set(rotateX, rotateY, rotateZ)
    }
    orbitControls.update()
  }

  // Introductions.
  const introductions = (): {
    introductionCore: () => void
  } => {
    camera.lookAt(new Vector3(0, 0, 0))

    const general: { setControls: boolean; taskDone: boolean } = {
      setControls: false,
      taskDone: false
    }

    const cameraMove: {
      angle: number
      rangeCurrent: number
      rangeLimit: number
      rangeDuration: number
      readonly downLimit: number
      readonly upLimit: number
      height: number
      readonly heightDuration: number
    } = {
      angle: 0,
      rangeCurrent: -90,
      rangeLimit: -5,
      rangeDuration: 0.135,
      downLimit: -15,
      upLimit: 4,
      height: 4,
      heightDuration: 0.1
    }

    const setBombVector = (): {
      x: number
      y: number
    }[] => {
      let vectorY = 3
      const bombVectorArr: { x: number; y: number }[] = Array.from({ length: 27 }, (_info, index) => {
        const obj = {
          x: index % 8,
          y: vectorY
        }
        index % 8 === 7 && (vectorY -= 1)
        return obj
      })
      return bombVectorArr
    }
    const bombVectorArr = setBombVector()

    const bomb = {
      switchTextureFirst: 0,
      switchTextureSecond: 0,
      switchTextureThird: 0,
      fn: (switchTexture: number, depthTest: boolean, scaleX = 9, scaleY = 6.5, scaleZ = 9, positionX = 0, positionY = -1.75, positionZ = 0): void => {
        spriteMaterial.map!.offset = new Vector2(0.125 * bombVectorArr[switchTexture].x, 0.25 * bombVectorArr[switchTexture].y)
        spriteMaterial.map!.repeat = new Vector2(1 / 8, 1 / 4)
        spriteMaterial.depthTest = depthTest
        const sprite = new Sprite(spriteMaterial)
        sprite.scale.set(scaleX, scaleY, scaleZ)
        sprite.position.set(positionX, positionY, positionZ)
        scene.add(sprite)
      }
    }

    const introductionCore = (): void => {
      if (!general.taskDone) {
        const radian = (cameraMove.angle * Math.PI) / 180
        const cameraRange = cameraMove.rangeCurrent < cameraMove.rangeLimit ? (cameraMove.rangeCurrent += cameraMove.rangeDuration) : cameraMove.rangeLimit
        camera.position.x = Math.sin(radian) * cameraRange
        camera.position.z = Math.cos(radian) * cameraRange

        if (!general.setControls) {
          cameraMove.angle += 1
        }

        if (cameraMove.rangeLimit === -5 && cameraRange === cameraMove.rangeLimit && camera.position.y > cameraMove.downLimit) {
          camera.position.y = cameraMove.height -= cameraMove.heightDuration
          bomb.switchTextureFirst < 26 && (bomb.switchTextureFirst += 1) && bomb.fn(bomb.switchTextureFirst, false)
          bomb.switchTextureFirst === 26 &&
            scene.children.map((info) => {
              info.type === 'Sprite' && scene.remove(info)
            })
        }

        if (camera.position.y <= cameraMove.downLimit) {
          cameraMove.rangeLimit = 5
        }

        if (cameraMove.rangeLimit === 5 && cameraRange >= cameraMove.rangeLimit && camera.position.y <= cameraMove.upLimit) {
          camera.position.y = cameraMove.height += cameraMove.heightDuration
        }

        if (window.innerWidth <= 767 && cameraMove.rangeLimit === 5 && camera.position.y >= cameraMove.upLimit) {
          cameraMove.rangeLimit = 10
          cameraMove.rangeDuration = 0.04
        }

        if (window.innerWidth <= 767 && cameraMove.rangeLimit === 10 && cameraRange < cameraMove.rangeLimit && camera.position.y >= cameraMove.upLimit) {
          bomb.switchTextureSecond < 26 && (bomb.switchTextureSecond += 1) && bomb.fn(bomb.switchTextureSecond, true)
          bomb.switchTextureSecond === 26 &&
            scene.children.map((info) => {
              info.type === 'Sprite' && scene.remove(info)
            })
        }

        if (window.innerWidth <= 767 && cameraMove.rangeLimit === 10 && cameraRange >= cameraMove.rangeLimit && camera.position.y >= cameraMove.upLimit) {
          cameraMove.angle += 0.15
          bomb.switchTextureThird < 26 && (bomb.switchTextureThird += 1) && bomb.fn(bomb.switchTextureThird, true, 7, 7, 7)
          bomb.switchTextureThird === 26 &&
            scene.children.map((info) => {
              info.type === 'Sprite' && scene.remove(info)
            })
          general.setControls = true
        }

        if (window.innerWidth > 767 && cameraMove.rangeLimit === 5 && cameraRange >= cameraMove.rangeLimit && camera.position.y >= cameraMove.upLimit) {
          cameraMove.angle += 0.3
          bomb.switchTextureSecond < 26 && (bomb.switchTextureSecond += 1) && bomb.fn(bomb.switchTextureSecond, true, 8, 7, 8)
          bomb.switchTextureSecond === 26 &&
            scene.children.map((info) => {
              info.type === 'Sprite' && scene.remove(info)
            })
          general.setControls = true
        }

        if (general.setControls && scene.children.every((info) => info.type !== 'Sprite')) {
          orbitControls.enabled = true
          general.taskDone = true
        }
      }
    }
    return { introductionCore }
  }
  const { introductionCore } = introductions()

  // Models Core.
  const modelsFn = (): {
    setModel: (visited: boolean) => void
    removeModel: () => void
  } => {
    let frameID: number
    const setModel = (visited: boolean): void => {
      // eslint-disable-next-line @typescript-eslint/no-extra-semi
      ;(function core(): void {
        modelLoop()
        !visited ? introductionCore() : (orbitControls.enabled = true)
        renderer.render(scene, camera)
        frameID = requestAnimationFrame(core)
      })()
    }
    const removeModel = (): void => {
      cancelAnimationFrame(frameID)
    }
    return { setModel, removeModel }
  }
  const { setModel, removeModel } = modelsFn()

  // れすぽん.
  const responsive = (): void => {
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    renderer.setSize(screenWidth, screenHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    camera.aspect = screenWidth / screenHeight
    camera.updateProjectionMatrix()
    if (screenWidth <= 767) {
      camera.position.set(10, 3.5, 0)
      meshGray.rotation.set(Math.PI / 2, 0, 0)
      meshBlack.rotation.set(Math.PI / 2, 0, Math.PI / 4)
    } else {
      camera.position.set(2, 4, 2)
      meshGray.rotation.set(Math.PI / 2, 0, Math.PI / 4)
      meshBlack.rotation.set(Math.PI / 2, 0, 0)
    }
  }

  // Helper #1.
  if (switches.launchHelper) {
    switches.launchEachHelper.axes && scene.add(axesHelper)
    switches.launchEachHelper.grid && scene.add(gridHelper)
    switches.launchEachHelper.camera && scene.add(cameraHelper)
    switches.launchEachHelper.topLight && scene.add(directionalLightTopHelper)
    switches.launchEachHelper.bottomLight && scene.add(directionalLightBottomHelper)
    switches.launchEachHelper.spotLight && scene.add(spotLightHelper)
    switches.launchEachHelper.pointLight && scene.add(pointLightHelper)
  }

  // Helper #2.
  if (switches.launchDummySphere) {
    sphere.position.set(0, 0, 0)
    sphere.castShadow = true
    scene.add(sphere)
  }

  return { renderer, setModel, removeModel, responsive }
}

export type hooksReturnType = {
  myComponent: RefObject<HTMLDivElement>
}

export const useLogoModel = (): hooksReturnType => {
  const myComponent = useRef<HTMLDivElement>(null)
  const visited = useSelector<StoreTypes, boolean>((state) => state.firstVisitStore.isVisited, shallowEqual)

  useEffect(() => {
    const { renderer, setModel, removeModel, responsive } = renderCore()
    myComponent.current!.appendChild(renderer.domElement)
    setModel(visited)
    window.addEventListener('resize', responsive)

    return (): void => {
      renderer.dispose()
      renderer.domElement.remove()
      removeModel()
      window.removeEventListener('resize', responsive)
    }
  })

  return { myComponent }
}
