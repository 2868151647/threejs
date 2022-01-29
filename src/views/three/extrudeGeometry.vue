<template>
  <div id="map"></div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: [],
  setup(props) {
    function box() {
      /**
       * 创建场景对象Scene
       */
      var scene = new THREE.Scene()

      var shape = new THREE.Shape()
      /**四条直线绘制一个矩形轮廓*/
      shape.moveTo(0, 0) //起点
      shape.lineTo(0, 20) //第2点
      shape.lineTo(100, 20) //第3点
      shape.lineTo(20, 0) //第4点
      shape.lineTo(0, 0) //第5点
      /**创建轮廓的扫描轨迹(3D样条曲线)*/
      var p1 = new THREE.Vector3(-85.35, -35.36)
      var p2 = new THREE.Vector3(0, 0, 0)
      var p3 = new THREE.Vector3(300, 0, 0)
      var p4 = new THREE.Vector3(300, 0, 300)
      var p5 = new THREE.Vector3(0, 0, 300)
      var p6 = new THREE.Vector3(0, 0, 0)
      // var p5 = new THREE.Vector3(85.35, -35.36)
      // 创建线条一：直线
      let line1 = new THREE.LineCurve3(p1, p2)
      // 重建线条2：三维样条曲线
      var curve = new THREE.CatmullRomCurve3(
        [p2, p3, p4, p5],
        false,
        'catmullrom',
        0.05
      )
      // 创建线条3：直线
      let line2 = new THREE.LineCurve3(p4, p5)
      var CurvePath = new THREE.CurvePath() // 创建CurvePath对象
      CurvePath.curves.push(line1, curve, line2) // 插入多段线条F

      const extrudeSettings = {
        extrudePath: curve,
        steps: 500,
        bevelEnabled: false
      }
      var geometry = new THREE.ExtrudeGeometry( //拉伸造型
        shape, //二维轮廓
        //拉伸参数
        extrudeSettings
      )

      var material = new THREE.MeshLambertMaterial({
        color: 0x8bcad3,
        // vertexColors: THREE.VertexColors,
        side: THREE.DoubleSide,
        opacity: 0.5,
        transparent: true,
        depthTest: false
        // size: 20.0 //点对象像素尺寸
      }) //材质对象
      // var points = new THREE.Points(geometry, material); //点模型对象
      var mesh = new THREE.Mesh(geometry, material)
      mesh.translateY(100)
      scene.add(mesh) //点对象添加到场景中

      /* Plane */
      const normal = new THREE.Vector3(0, 0, 1)
      const planeGround = new THREE.Plane(normal, 0) // 创建平面F
      const value = planeGround.distanceToPoint(new THREE.Vector3(2.15, 1, 2))

      console.log('Plane value>>>', value)

      // 辅助坐标系
      var axisHelper = new THREE.AxesHelper(150)
      scene.add(axisHelper)

      // 点光源
      var point = new THREE.PointLight(0xffffff)
      point.position.set(500, 500, 500) //点光源位置
      scene.add(point) //点光源添加到场景中
      // 环境光
      var ambient = new THREE.AmbientLight(0x444444)
      scene.add(ambient)

      var width = window.innerWidth - 300 //窗口宽度
      var height = window.innerHeight //窗口高度
      var k = width / height //窗口宽高比
      var s = 200 //三维场景显示范围控制系数，系数越大，显示的范围越大
      // 创建相机对象
      var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
      camera.position.set(500, 500, 500) //设置相机位置
      camera.lookAt(scene.position) //设置相机方向(指向的场景对象)
      /**
       * 创建渲染器对象
       */
      var renderer = new THREE.WebGLRenderer()
      renderer.setSize(width, height) //设置渲染区域尺寸
      renderer.setClearColor(0xf3f3f3, 1) //设置背景颜色
      document.getElementById('map').appendChild(renderer.domElement) //body元素中插入canvas对象
      //执行渲染操作   指定场景、相机作为参数
      function render() {
        renderer.render(scene, camera) //执行渲染操作
      }
      render()
      var controls = new THREE.OrbitControls(camera, renderer.domElement) //创建控件对象
      controls.addEventListener('change', render) //监听鼠标、键盘事件
    }
    return {
      box
    }
  },
  mounted() {
    this.box()
  }
}
</script>
