<template>
  <!-- <div>
    <div class="form-group">
      <label for="comment">{{ comment }}</label>
      <textarea class="form-control" rows="5" id="comment"></textarea>
    </div>
    <slot></slot>
  </div> -->

  <div>
    <div class="form-group">
      <label for="comment">{{ comment }}</label>
      <textarea class="form-control" rows="5" id="comment"></textarea>
    </div>
    <slot></slot>
  </div>
</template>

<script>
// export default {
//   props: {
//     comment: {
//       type: String,
//       required: false,
//     },
//   },
// };

export default {
  props: {
    comment: {
      type: String,
      required: false,
    },
  },
};
</script>