<template>
  <div class="hello">
    <!-- กลับไปทำ tailwind.css -->
    <h1 class="topic">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    msg: String
  }
}
</script>


