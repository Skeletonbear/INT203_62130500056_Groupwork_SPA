<template>
  <div>
    <button @click="buttonClick"   class="btn btn-default">
       <slot>{{ label }} </slot>
    </button>
  </div>
</template>

<script>
export default {
  emits: ["btn-click"],
  props: {
    label: {
      type: String,
      required: true,
    }
  },
  methods: {
    buttonClick() {
    const btnInfo= {label:this.label}
      console.log(`${this.label} completed`);
      this.$emit('btn-click', btnInfo)
    },
  },
};
</script>