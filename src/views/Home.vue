<template>
  <div class="home">
    <Content msg=" ''Improving lives through personalized care. " />
    <Content msg="  We treat you like family and each patient like our own pet.'' "/>
    <div class="bg-no-repeat bg-center">
      <img src="../assets/newscms.jpg" alt="CatAndDog" >
    </div>
  </div>
</template>

<script>
import Content from "@/components/Content.vue";
export default {
  name: "Home",
  components: {
    Content,
  },
};
</script>
