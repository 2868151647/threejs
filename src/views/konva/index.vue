<template>
  <div class="stage">
    <div id="first"></div>
  </div>
</template>

<script>
export default {
  methods: {
    draw() {
      // first we need to create a stage
      var stage = new Konva.Stage({
        container: 'first', // id of container <div>
        width: 500,
        height: 500
      })

      // then create layer
      var layer = new Konva.Layer()

      // create our shape
      var circle = new Konva.Circle({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
      })
      circle.draggable('true')
      circle.on('xChange', function () {
        console.log('position change')
      })

      var triangle = new Konva.Shape({
        sceneFunc: function (context) {
          context.beginPath()
          context.moveTo(0, 0)
          context.lineTo(500, 500)
          context.quadraticCurveTo(120, 100, 280, 180)
          context.closePath()

          // special Konva.js method
          context.fillStrokeShape(this)
        },
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 2
      })
      triangle.draggable('true')

      var pentagon = new Konva.RegularPolygon({
        x: stage.width() / 4,
        y: stage.height() / 2,
        sides: 5,
        radius: 20,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        shadowOffsetX: 20,
        shadowOffsetY: 25,
        shadowBlur: 40,
        opacity: 0.5
      })
      pentagon.draggable('true')

      // add the shape to the layer
      layer.add(circle)
      layer.add(triangle)
      layer.add(pentagon)

      // add the layer to the stage
      stage.add(layer)

      // draw the image
      layer.draw()
    }
  },
  mounted() {
    this.draw()
  }
}
</script>

<style scoped>
.stage {
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 248, 238, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
#first {
  width: 500px;
  border: 1px solid black;
}
</style>
