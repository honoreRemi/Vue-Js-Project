<template>
     <a
        :href="page.link.url"
        class="nav-link"
        :class="activeClasses"
        aria-current="page"
        :title="`This link goes to the ${page.link.text} page`"
      >
        {{ page.link.text }}
      </a>
</template>

<script>
export default{
  props: ['page', 'isActive'],
  computed: {
    activeClasses(){
      return{
        active: this.isActive,
        emphasize: this.isActive,
      }
    }
  }
}
</script> 

<style>
  .emphasize{
    text-decoration: underline !important;
  }
</style>