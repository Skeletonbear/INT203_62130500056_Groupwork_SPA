<template>
<div>
  <button type="submit" class="btn btn-default">{{ label }}</button>
</div>
</template>

<script>
 export default {
     props: {
         label: {
             type: String,
             required: true
         }
     }
 }
 </script>