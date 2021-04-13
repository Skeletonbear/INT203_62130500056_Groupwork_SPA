<template>
  <div class="hello">
    <!-- กลับไปทำ tailwind.css -->
    <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">{{ msg }}</h1>
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


