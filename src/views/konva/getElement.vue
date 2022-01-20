<template>
  <div class="container">
    stage.container() 获取的是整个stage(场景)的element
    <div id="ele"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    var width = window.innerWidth / 2
    var height = window.innerHeight / 2

    var stage = new Konva.Stage({
      container: 'ele',
      width: width,
      height: height
    })
    var layer = new Konva.Layer()

    var shape1 = new Konva.RegularPolygon({
      x: 80,
      y: stage.height() / 2,
      sides: 5,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4,
      draggable: true
    })

    var shape2 = new Konva.RegularPolygon({
      x: 220,
      y: stage.height() / 2,
      sides: 5,
      radius: 70,
      fill: 'green',
      stroke: 'black',
      strokeWidth: 4,
      draggable: true
    })

    var shape3 = new Konva.RegularPolygon({
      x: 360,
      y: stage.height() / 2,
      sides: 5,
      radius: 70,
      fillLinearGradientStartPoint: { x: -50, y: -50 },
      fillLinearGradientEndPoint: { x: 50, y: 50 },
      fillLinearGradientColorStops: [0, 'red', 1, 'yellow'],
      stroke: 'black',
      strokeWidth: 4,
      draggable: true
    })

    shape1.on('mouseenter', function () {
      console.log('element>>', stage.container());
      stage.container().style.cursor = 'pointer'
    })

    shape1.on('mouseleave', function () {
      stage.container().style.cursor = 'default'
    })

    shape2.on('mouseenter', function () {
      stage.container().style.cursor = 'move'
    })

    shape2.on('mouseleave', function () {
      stage.container().style.cursor = 'default'
    })

    shape3.on('mouseenter', function () {
      stage.container().style.cursor = 'crosshair'
    })

    shape3.on('mouseleave', function () {
      stage.container().style.cursor = 'default'
    })

    layer.add(shape1)
    layer.add(shape2)
    layer.add(shape3)
    stage.add(layer)
  }
}
</script>

<style>
.container {
  background-color: rgba(255, 248, 238, 0.5);
  height: 100vh;
}
</style>
