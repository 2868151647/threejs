<template>
  <h2>材质介绍</h2>
</template>

<script>
export default {
  data() {
    return {
      scene: null
    }
  },
  methods: {
    meterial() {
      /**
       * 创建场景对象Scene
       */
      var scene = new THREE.Scene();
      /**
       * 创建网格模型
       */
      // var geometry = new THREE.SphereGeometry(60, 40, 40); //创建一个球体几何对象
      // var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
      // var geometry = new THREE.IcosahedronGeometry(50); //创建一个正16边形几何对象Geometry
      // var material = new THREE.MeshLambertMaterial({
      //   color: 0xF4A460,
      //   // wireframe: true
      // }); //材质对象Material

      // var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
      // mesh.position.set(100,100,0)
      // scene.add(mesh); //网格模型添加到场景中

      // // 圆柱网格模型
      // var geometry3 = new THREE.CylinderGeometry(50, 50, 100, 25);
      // var material3 = new THREE.MeshLambertMaterial({
      //   color: 0xffff00,
      // });
      // var mesh3 = new THREE.Mesh(geometry3, material3); //网格模型对象Mesh
      // // mesh3.translateX(120); //球体网格模型沿Y轴正方向平移120
      // mesh3.position.set(220, 0, 0);//设置mesh3模型对象的xyz坐标为120,0,0
      // scene.add(mesh3);

      var geometry = new THREE.SphereGeometry(100, 25, 25); //创建一个球体几何对象
      // 创建一个点材质对象
      // 虚线材质对象：产生虚线效果
      var material = new THREE.MeshLambertMaterial({
        color: 0x0000ff,
      });
      var line = new THREE.Mesh(geometry, material); //线模型对象
      //  computeLineDistances方法  计算LineDashedMaterial所需的距离数组
      // line.computeLineDistances();
      scene.add(line); //网格模型添加到场景中


      //   var geometry = new THREE.BufferGeometry(); //创建一个Buffer类型几何体对象
      //   //类型数组创建顶点数据
      //   var vertices = new Float32Array([
      //     10, 0, 0, //顶点1坐标
      //     50, 0, 0, //顶点2坐标
      //     0, 50, 0, //顶点3坐标

      //     0, 0, 0, //顶点4坐标
      //     0, 0, 90, //顶点5坐标
      //     50, 0, 0, //顶点6坐标
      //   ]);
      //   // 创建属性缓冲区对象
      //   var attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标
      //   // 设置几何体attributes属性的位置属性
      //   geometry.attributes.position = attribue;


      //   var colors = new Float32Array([
      //     1, 0, 0, //顶点1颜色
      //     0, 1, 0, //顶点2颜色
      //     0, 0, 1, //顶点3颜色

      //     1, 1, 0, //顶点4颜色
      //     0, 1, 1, //顶点5颜色
      //     1, 0, 1, //顶点6颜色
      //   ]);
      //   geometry.attributes.color = new THREE.BufferAttribute(colors, 3);
      //   var normals = new Float32Array([
      //     0, 0, 1, //顶点1法向量
      //     0, 0, 1, //顶点2法向量
      //     0, 0, 1, //顶点3法向量

      //     0, 1, 0, //顶点4法向量
      //     0, 1, 0, //顶点5法向量
      //     0, 1, 0, //顶点6法向量
      //   ]);
      //   // 设置几何体attributes属性的位置normal属性
      //   geometry.attributes.normal = new THREE.BufferAttribute(normals, 3);
      //   // // 三角面(网格)渲染模式
      //   // var material = new THREE.MeshBasicMaterial({
      //   //   color: 0xF4A460, //三角面颜色
      //   //   side: THREE.DoubleSide //两面可见
      //   // }); //材质对象
      //   // var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
      //   // scene.add(mesh)
      //   var material = new THREE.MeshLambertMaterial({
      //     // color: 0x0000ff,
      //     vertexColors: THREE.VertexColors,
      //     side: THREE.DoubleSide,
      //     // size: 20.0 //点对象像素尺寸
      //   }); //材质对象
      //   // var points = new THREE.Points(geometry, material); //点模型对象
      //   var mesh = new THREE.Mesh(geometry, material);
      //   scene.add(mesh); //点对象添加到场景中

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
    this.meterial()
  },
}
</script>

<style>
</style>