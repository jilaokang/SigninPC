<template>
        <Footer class="layout-footer-center">2017- {{this.todayYear}} &copy; Gunius Kaso</Footer>
</template>

<script>
export default {
  computed: {
    todayYear() {
      let a = new Date();
      return a.getFullYear();
    }
  }
};
</script>

<style scoped>

</style>