<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  created(){
    const api = 'https://demo-api-vue.sanbercloud.com/api/v2/blog/random/3'
    this.axios.get(api).then((response) => {
      console.log(response.data)
    })
  }
}
</script>
