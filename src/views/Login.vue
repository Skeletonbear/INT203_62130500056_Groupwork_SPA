<template>
  <div class="px-48">
    <base-card>
      <div class="login">
        <form action="/action_page.php">
          <the-from name="Name" password="Password" />
          <base-buttons label="submit" />
        </form>
      </div>
    </base-card>
  </div>
</template>

<script>
import BaseCard from "../components/BaseCard.vue";
export default {
  name: "Login",
  components: {
    BaseCard,
  },
};
</script>