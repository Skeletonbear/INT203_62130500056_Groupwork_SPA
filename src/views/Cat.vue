<template>
  <div class="mx-10">
    <div class="Cat">
      <h1 class="topic">Fruits and Vegetables that are Safe for Cats</h1>

      <div class="space-y-6 text-left">
        <div>
          Fruits and Veggies that are Safe for Cats Cats are carnivores, which
          means that their diet should be primarily protein-based. Your feline
          friend doesn’t actually need fruits or vegetables in her diet to
          remain healthy, but they do make a good alternative to high-calorie
          treats. Here are some of the safest fruits and vegetables that you can
          share with your kitty.
        </div>

        <div class="flex space-x-60 flex justify-center">
          <div >
            <img src="../assets/cat/Asparagus-steamed.jpg" class="Radius" />
            1. Asparagus (steamed)
          </div>
          <div>
            <img src="../assets/cat/Baked-carrots.jpg" class="Radius"/>2. Baked carrots
          </div>
          <div>
            <img src="../assets/cat/Bananas.jpg" class="Radius"/>3. Bananas
          </div>
          <div >
            <img src="../assets/cat/Blueberries.jpg" class="Radius" />
            4. Blueberries
          </div>
        </div>
        
        <div class="flex space-x-60 flex justify-center">
          
          <div>
            <img src="../assets/cat/Carrots-steamed.png" class="Radius"/>5. Carrots
            (steamed)
          </div>
          <div >
            <img src="../assets/cat/Greenbeans-and-Broccoli.jpg" class="Radius" />
            6. Broccoli (steamed)
          </div>
          <div>
            <img src="../assets/cat/Melon.jpg" class="Radius"/>7. Melon
          </div>
          
        </div>

        <div class="flex space-x-60 flex justify-center">
          <div>
            <img src="../assets/cat/Peas.jpg" class="Radius"/>8. Peas
          </div>
          <div >
            <img src="../assets/cat/Pumpkin.jpg" class="Radius" />
            9. Pumpkin
          </div>
          
        </div>

        <div class="flex space-x-60 flex justify-center">
          <div>
            <img src="../assets/cat/Spinach.png" class="Radius"/>10. Spinach
          </div>
        </div>

  
        
        <div class="px-48">
          <baes-comment
            label="submit"
            @comment-submit="addNewComment"
            comment="Comment"
          ></baes-comment>
        </div>

        <div v-for="result in commentResults" :key="result.id" class="Center">
          <div class="">
            <p class="text-purple-600 italic flex">
              {{ result.comment }}
              <base-buttons
                class="ml-8"
                @click="deleteComment(result.id)"
                label="Delete"
              >
              </base-buttons>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "http://localhost:5050/commentResults",
      commentResults: [],
    };
  },
  methods: {
    async addNewComment(newComment) {
      const res = await fetch(this.url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          comment: newComment.comment,
        }),
      });
      const data = await res.json();
      this.commentResults = [...this.commentResults, data];
      this.enteredComment = "";
    },

    async fetchCommentResult() {
      const res = await fetch(this.url);
      const data = await res.json();
      return data;
    },

    async deleteComment(deleteId) {
      try {
        await fetch(`${this.url}/${deleteId}`, {
          method: "DELETE",
        });
        this.commentResults = this.commentResults.filter(
          (result) => result.id !== deleteId
        );
      } catch (error) {
        console.log(`Could not delete! ${error}`);
      }
    },
  },
  async created() {
    this.commentResults = await this.fetchCommentResult();
  },
};
</script>





