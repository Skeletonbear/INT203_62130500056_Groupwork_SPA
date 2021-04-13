<template>
  <div>
    <div class="form-group">
      <label for="usr">{{ name }}:</label>
      <input type="text" class="form-control" id="usr" />
    </div> 
    <div class="form-group">
      <label for="pwd">{{ password }}:</label>
      <input type="password" class="form-control" id="pwd" />
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
  },
};
</script>