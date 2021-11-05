<template>
  <h2>阴影</h2>
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
      var geometry = new THREE.BoxGeometry(40, 100, 40);
      var material = new THREE.MeshLambertMaterial({
        color: 0x0000ff
      });
      var mesh = new THREE.Mesh(geometry, material);
      // mesh.position.set(0,0,0)
      scene.add(mesh);

      // 设置产生投影的网格模型
      mesh.castShadow = true;


      //创建一个平面几何体作为投影面
      var planeGeometry = new THREE.PlaneGeometry(300, 200);
      var planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xff0000
      });

      // 平面网格模型作为投影面
      var planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
      scene.add(planeMesh); //网格模型添加到场景中
      planeMesh.rotateX(-Math.PI / 2); //旋转网格模型
      planeMesh.position.y = -50; //设置网格模型y坐标
      // 设置接收阴影的投影面
      planeMesh.receiveShadow = true;

      //创建一个平面几何体作为投影面
      var planeGeometry = new THREE.PlaneGeometry(300, 200);
      var planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        
      });
      // 平面网格模型作为投影面
      var planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
      scene.add(planeMesh); //网格模型添加到场景中
      planeMesh.rotateX(-Math.PI / 2); //旋转网格模型
      planeMesh.position.y = -50; //设置网格模型y坐标
      // 设置接收阴影的投影面
      planeMesh.receiveShadow = true;


      // 方向光
      var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.castShadow = true;
      // 设置光源位置
      directionalLight.position.set(160, 100, 40);
      
      // 设置用于计算阴影的光源对象
      directionalLight.castShadow = true;
      // 设置计算阴影的区域，最好刚好紧密包围在对象周围
      // 计算阴影的区域过大：模糊  过小：看不到或显示不完整
      directionalLight.shadow.camera.near = 0.5;
      directionalLight.shadow.camera.far = 300;
      directionalLight.shadow.camera.left = -50;
      directionalLight.shadow.camera.right = 50;
      directionalLight.shadow.camera.top = 200;
      directionalLight.shadow.camera.bottom = -100;
      // 设置mapSize属性可以使阴影更清晰，不那么模糊
      // directionalLight.shadow.mapSize.set(1024,1024)
      console.log(directionalLight.shadow.camera);
      scene.add(directionalLight);



      // 点光源
      //   var point = new THREE.PointLight(0xffffff);
      //   point.position.set(100, 100, 100); //点光源位置
      //   scene.add(point); //点光源添加到场景中
      //   环境光
      //   var ambient = new THREE.AmbientLight(0x444444);
      //   scene.add(ambient);

      // 辅助坐标系
      var axisHelper = new THREE.AxesHelper(150);
      scene.add(axisHelper);


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
      var renderer = new THREE.WebGLRenderer({antialias: true});
      renderer.setSize(width, height); //设置渲染区域尺寸
      renderer.setClearColor(0x000000, 1); //设置背景颜色
      renderer.shadowMapEnabled = true;
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