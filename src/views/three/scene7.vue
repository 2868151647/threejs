<template>
  <div id="map"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    func() {
      var scene = new THREE.Scene();

      // var geometry = new THREE.BufferGeometry();
      // var arc = new THREE.ArcCurve(0, 0, 100, 0, 2 * Math.PI);
      // var points = arc.getPoints(5);
      // geometry.setFromPoints(points);
      // // geometry.attributes.position = new THREE.Vector2(0,0)
      // var material = new THREE.LineBasicMaterial({
      //   color: 0x000000
      // });
      // var line = new THREE.Line(geometry, material);
      // scene.add(line)

      // //
      // var geometry1 = new THREE.BufferGeometry(); //声明一个几何体对象Geometry
      // var R = 50;
      // var N = 50;
      // var vertices = []
      // for (var i = 0; i < N; i++) {
      //   var angle = 2 * Math.PI / N * i;
      //   var x = R * Math.sin(angle);
      //   var y = R * Math.cos(angle);
      //   vertices.push(x, y, 0);
      // }
      // vertices = new Float32Array(vertices)
      // // 创建属性缓冲区对象
      // var attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标
      // // 设置几何体attributes属性的位置属性
      // geometry1.attributes.position = attribue;
      // // 插入最后一个点，line渲染模式下，产生闭合效果
      // // geometry.vertices.push(geometry.vertices[0])
      // var material = new THREE.LineBasicMaterial({
      //   color: 0x000000
      // });
      // var line = new THREE.LineLoop(geometry1, material);
      // scene.add(line);
      // // ##

      // var geometry2 = new THREE.BufferGeometry();
      // var vertices1 = new Float32Array([
      //   0, 0, 0,
      //   50, 50, 0,
      // ])
      // geometry2.attributes.position = new THREE.BufferAttribute(vertices1, 3);
      // var material1 = new THREE.LineBasicMaterial({
      //   color: 0x000000
      // });
      // var line1 = new THREE.LineLoop(geometry2, material1);
      // scene.add(line1);
      // // ##
      // var geometry3 = new THREE.BufferGeometry(); //声明一个几何体对象Geometry
      // var p1 = new THREE.Vector3(50, 0, 0); //顶点1坐标
      // var p2 = new THREE.Vector3(0, 50, 0); //顶点2坐标
      // // 三维直线LineCurve3
      // var LineCurve = new THREE.LineCurve3(p1, p2);
      // // 二维直线LineCurve
      // // var LineCurve = new THREE.LineCurve(new THREE.Vector2(50, 50), new THREE.Vector2(0, 50));
      // var pointArr = LineCurve.getPoints(10);
      // geometry3.setFromPoints(pointArr);
      // var line2 = new THREE.LineLoop(geometry3, material1);
      // scene.add(line2);

      // ##
      // var geometry = new THREE.BufferGeometry(); //声明一个几何体对象Geometry
      // // 三维样条曲线  Catmull-Rom算法
      // var curve = new THREE.CatmullRomCurve3([
      //   new THREE.Vector3(-50, 20, 90),
      //   new THREE.Vector3(-10, 40, 40),
      //   new THREE.Vector3(0, 0, 0),
      //   new THREE.Vector3(60, -60, 0),
      //   new THREE.Vector3(70, 0, 80)
      // ]);
      // //getPoints是基类Curve的方法，返回一个vector3对象作为元素组成的数组
      // var points = curve.getPoints(10); //分段数100，返回101个顶点
      // // setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
      // geometry.setFromPoints(points);
      // //材质对象
      // var material = new THREE.LineBasicMaterial({
      //   color: 0x000000
      // });
      // //线条模型对象
      // var line = new THREE.Line(geometry, material);
      // scene.add(line); //线条对象添加到场景中

      // ##
      var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
      var material = new THREE.MeshLambertMaterial({
        color: 0x0000ff,
      }); //材质对象Material
      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(100, 0, 0);
      var geometry1 = new THREE.BoxGeometry(100, 50, 20); //创建一个立方体几何对象Geometry
      var material1 = new THREE.MeshLambertMaterial({
        color: 0xff00ff,
      }); //材质对象Material
      var mesh1 = new THREE.Mesh(geometry1, material1);
      mesh.position.set(100, 0, 0);
      mesh1.position.set(-100, 0, 0);
      mesh.name = "Box";
      mesh1.name = "Sphere";
      // scene.add(mesh, mesh1);
      var group = new THREE.Group();
      group.add(mesh);
      group.add(mesh1);
      scene.add(group)
      var times = [0, 10]; //关键帧时间数组，离散的时间点序列
      var values = [0, 0, 0, 150, 0, 0]; //与时间点对应的值组成的数组
      // 创建位置关键帧对象：0时刻对应位置0, 0, 0   10时刻对应位置150, 0, 0
      var posTrack = new THREE.KeyframeTrack("Box.position", times, values);
      // 创建颜色关键帧对象：10时刻对应颜色1, 0, 0   20时刻对应颜色0, 0, 1
      var colorKF = new THREE.KeyframeTrack(
        "Box.material.color",
        [10, 20],
        [1, 0, 0, 0, 0, 1]
      );
      // 创建名为Sphere对象的关键帧数据  从0~20时间段，尺寸scale缩放3倍
      var scaleTrack = new THREE.KeyframeTrack(
        "Sphere.scale",
        [0, 20],
        [1, 1, 1, 3, 3, 3]
      );

      // duration决定了默认的播放时间，一般取所有帧动画的最大时间
      // duration偏小，帧动画数据无法播放完，偏大，播放完帧动画会继续空播放
      var duration = 20;
      // 多个帧动画作为元素创建一个剪辑clip对象，命名"default"，持续时间20
      var clip = new THREE.AnimationClip("default", duration, [
        posTrack,
        colorKF,
        scaleTrack
      ]);
      // group作为混合器的参数，可以播放group中所有子对象的帧动画
      var mixer = new THREE.AnimationMixer(group);
      // 剪辑clip作为参数，通过混合器clipAction方法返回一个操作对象AnimationAction
      var AnimationAction = mixer.clipAction(clip);
      //通过操作Action设置播放方式
      AnimationAction.timeScale = 20; //默认1，可以调节播放速度
      // AnimationAction.loop = THREE.LoopOnce; //不循环播放
      AnimationAction.play(); //开始播放
      // ---------------------------------------------
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

      var width = window.innerWidth / 2; //窗口宽度
      var height = window.innerHeight / 2; //窗口高度
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
      document.getElementById('map').appendChild(renderer.domElement);//body元素中插入canvas对象
      //执行渲染操作   指定场景、相机作为参数

      // function render() {
      //   renderer.render(scene, camera); //执行渲染操作
      //   mesh.rotateY(0.01); //每次绕y轴旋转0.01弧度
      //   requestAnimationFrame(render);
      // }
      // render();
      var clock = new THREE.Clock();
      function render() {
        renderer.render(scene, camera); //执行渲染操作
        requestAnimationFrame(render);
        mixer.update(clock.getDelta());
      }
      render();
      var controls = new THREE.OrbitControls(camera, renderer.domElement); //创建控件对象
      controls.addEventListener("change", render); //监听鼠标、键盘事件
    },
  },
  mounted() {
    this.func();
  },
};
</script>

<style>
</style>