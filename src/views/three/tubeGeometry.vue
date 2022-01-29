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
      /**
       * 创建网格模型
       */
      //创建管道成型的路径(3D样条曲线)
      var path = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-10, -50, -50),
        new THREE.Vector3(10, 0, 0),
        new THREE.Vector3(8, 50, 50),
        new THREE.Vector3(-5, 0, 100)
      ])
      // var path = new THREE.LineCurve3(new THREE.Vector3(0, 100, 0), new THREE.Vector3(0, 0, 0));
      // path:路径   40：沿着轨迹细分数  2：管道半径   25：管道截面圆细分数
      var geometry = new THREE.TubeGeometry(path, 40, 2, 25)
      var material = new THREE.MeshLambertMaterial({
        color: 0x0000ff,
        // vertexColors: THREE.VertexColors,
        side: THREE.DoubleSide
        // size: 20.0 //点对象像素尺寸
      }) //材质对象
      // var points = new THREE.Points(geometry, material); //点模型对象
      var mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh) //点对象添加到场景中

      // 辅助坐标系
      var axisHelper = new THREE.AxesHelper(150)
      scene.add(axisHelper)

      // 点光源
      var point = new THREE.PointLight(0xffffff)
      point.position.set(100, 100, 100) //点光源位置
      scene.add(point) //点光源添加到场景中
      // 环境光
      var ambient = new THREE.AmbientLight(0x444444)
      scene.add(ambient)

      var width = window.innerWidth / 2 //窗口宽度
      var height = window.innerHeight / 2 //窗口高度
      var k = width / height //窗口宽高比
      var s = 200 //三维场景显示范围控制系数，系数越大，显示的范围越大
      // 创建相机对象
      var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
      camera.position.set(300, 200, 50) //设置相机位置
      camera.lookAt(scene.position) //设置相机方向(指向的场景对象)
      /**
       * 创建渲染器对象
       */
      var renderer = new THREE.WebGLRenderer()
      renderer.setSize(width, height) //设置渲染区域尺寸
      renderer.setClearColor(0xb9d3ff, 1) //设置背景颜色
      document.getElementById('map').appendChild(renderer.domElement) //body元素中插入canvas对象
      //执行渲染操作   指定场景、相机作为参数

      // function render() {
      //   renderer.render(scene, camera); //执行渲染操作
      //   mesh.rotateY(0.01); //每次绕y轴旋转0.01弧度
      //   requestAnimationFrame(render);
      // }
      // render();
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
