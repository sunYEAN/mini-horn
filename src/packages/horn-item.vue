<template>
  <div class="horn-item">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "horn-item"
    }
</script>

<style scoped lang="less">
  .horn-item{
    width: 100%;
    height: 20px;
    display: flex;
    padding: 0 10px;
    flex-shrink: 0;
    align-items: center;
  }
</style>
