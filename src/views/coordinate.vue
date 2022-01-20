<template>坐标系111</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    coordinate() {
      var scene = new THREE.Scene();

      var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个球体几何对象
      var material = new THREE.MeshLambertMaterial({
        color: 0x0000ff,
        opacity: 0.5,
        transparent: true
      });
      var mesh = new THREE.Mesh(geometry, material); //线模型对象
      //网格模型添加到场景中
      mesh.position.set(50,0,0)
      // var geometry1 = new THREE.BoxGeometry(100, 100, 100); //创建一个球体几何对象
      // var material1 = new THREE.MeshLambertMaterial({
      //   color: 0x0000ff,
      //   opacity: 0.5,
      //   transparent: true
      // });
      // var mesh1 = new THREE.Mesh(geometry1, material1); //线模型对象
      var group = new THREE.Group();
      group.position.set(50,0,0)
      group.add(mesh);

      scene.add(group)

      // 辅助坐标系
      var axisHelper = new THREE.AxesHelper(150);
      scene.add(axisHelper);

      // 点光源
      var point = new THREE.PointLight(0xffffff);
      point.position.set(100, 100, 100); //点光源位置
      scene.add(point); //点光源添加到场景中
      // 环境光
      var ambient = new THREE.AmbientLight(0x444444);
      scene.add(ambient);

      var width = window.innerWidth; //窗口宽度
      var height = window.innerHeight; //窗口高度
      var k = width / height; //窗口宽高比
      var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
      // 创建相机对象
      var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
      camera.position.set(300, 200, 50); //设置相机位置
      camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
      /**
       * 创建渲染器对象
       */
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height); //设置渲染区域尺寸
      renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
      document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
      //执行渲染操作   指定场景、相机作为参数

      // function render() {
      //   renderer.render(scene, camera); //执行渲染操作
      //   mesh.rotateY(0.01); //每次绕y轴旋转0.01弧度
      //   requestAnimationFrame(render);
      // }
      // render();
      function render() {
        renderer.render(scene, camera); //执行渲染操作
      }
      render();
      var controls = new THREE.OrbitControls(camera, renderer.domElement); //创建控件对象
      controls.addEventListener("change", render); //监听鼠标、键盘事件
    }
  },
  mounted() {
    this.coordinate()
  },
}
</script>

<style>
</style>