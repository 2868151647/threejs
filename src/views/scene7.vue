<template>坐标系</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    func() {
      var scene = new THREE.Scene();

      var geometry = new THREE.BufferGeometry();
      var arc = new THREE.ArcCurve(0, 0, 100, 0, 2 * Math.PI);
      var points = arc.getPoints(50);
      geometry.setFromPoints(points);
      var material = new THREE.LineBasicMaterial({
        color: 0x000000
      });
      var line = new THREE.Line(geometry, material);
      scene.add(line)
      // ##

      var geometry1 = new THREE.BufferGeometry(); //声明一个几何体对象Geometry
      var R = 50;
      var N = 50;
      var vertices = []
      for (var i = 0; i < N; i++) {
        var angle = 2 * Math.PI / N * i;
        var x = R * Math.sin(angle);
        var y = R * Math.cos(angle);
        vertices.push(x, y, 0);
      }
      vertices = new Float32Array(vertices)
      // 创建属性缓冲区对象
      var attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标
      // 设置几何体attributes属性的位置属性
      geometry1.attributes.position = attribue;
      // 插入最后一个点，line渲染模式下，产生闭合效果
      // geometry.vertices.push(geometry.vertices[0])
      var material = new THREE.LineBasicMaterial({
        color: 0x000000
      });
      var line = new THREE.LineLoop(geometry1, material);
      scene.add(line);
      // ##

      var geometry2 = new THREE.BufferGeometry();
      var vertices1 = new Float32Array([
        0, 0, 0,
        50, 50, 0,
      ])
      geometry2.attributes.position = new THREE.BufferAttribute(vertices1, 3);
      var material1 = new THREE.LineBasicMaterial({
        color: 0x000000
      });
      var line1 = new THREE.LineLoop(geometry2, material1);
      scene.add(line1);
      // ##
      var geometry3 = new THREE.BufferGeometry(); //声明一个几何体对象Geometry
      var p1 = new THREE.Vector3(50, 0, 0); //顶点1坐标
      var p2 = new THREE.Vector3(0, 50, 0); //顶点2坐标
      // 三维直线LineCurve3
      var LineCurve = new THREE.LineCurve3(p1, p2);
      // 二维直线LineCurve
      // var LineCurve = new THREE.LineCurve(new THREE.Vector2(50, 0), new THREE.Vector2(0, 50));
      var pointArr = LineCurve.getPoints(10);
      geometry3.setFromPoints(pointArr);
      var line2 = new THREE.LineLoop(geometry3, material1);
      scene.add(line2);

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
    this.func()
  },
}
</script>

<style>
</style>