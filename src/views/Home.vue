<template>
  <div class="home">
    <base-card>
      <Content msg=" ''Improving lives through personalized care. " />
      <Content msg="  We treat you like family and each patient like our own pet.'' "/>

      <div class="Center">
        <img class="h-4/5 w-4/5" src="../assets/newscms.jpg" alt="CatAndDog" />
      </div>

      <h1 class="topic">Fruits and Vegetables Your Pet Can Safely Eat</h1>
      <img class="Picleft" src="../assets/et.jpg" />
      <img class="Picright" src="../assets/shutterstock_267768653.jpg" />

      <div class="Contentgroup">
        <div class="CalssSpace">
          <p class="paragraph1">
            Humans, we all know how important fruits and vegetables are for our
            health. Abundant in vitamins, minerals, and fiber and low in
            calories, fruits and veggies are some of the most nutritious things
            that we can eat. It might also surprise you to know that some of
            these delicious and nutritious foods can also be beneficial to your
            pet’s health.
          </p>
          <div class="Contentgroup">
            <p class="paragraph2">
              Although many of us like to share household food with our furry
              friends, not all human food is appropriate or safe for your pet to
              eat. To help you out, the experienced vets at Avondale Animal
              Hospital have put together this guide to fruits and veggies your
              pet can safely enjoy.
            </p>
          </div>
        </div>
      </div>

      <div class="my-8">
        <button type="button" class="btn btn-info">
          <a><router-link to="/cat">Cat </router-link> |</a>
        </button>
        <button type="button" class="btn btn-warning">
          <a><router-link to="/Dog">Dog</router-link> |</a>
        </button>
      </div>

    </base-card>

  </div>
</template>

<script>
import Content from "@/components/Content.vue";
import BaseCard from "../components/BaseCard.vue";
export default {
  name: "Home",
  components: {
    Content,
    BaseCard,
  },
};
</script>
