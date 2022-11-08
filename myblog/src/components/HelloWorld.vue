
<template>
  <div class="hello">
    <iframe height="100%" width=100% :src="`${getFilePath}`" ></iframe>
  </div>
</template>

<script>


export default
{
  name: 'HelloWorld',
  props: {
  fileName: String,
    path:String
},
  computed:{
    getFilePath: function () {
      if(this.fileName!==''){
        return this.path +'?file=' + this.fileName
      }
      return this.path
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div {

  width: 100%;
  height: 100vh;
  min-width: 400px;
  magrin: 0 auto;
}

</style>
