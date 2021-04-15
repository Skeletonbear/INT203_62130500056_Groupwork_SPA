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
        <div>
          <span class="">Asparagus (steamed)</span>
          <span class=""> Baked carrots</span>
          <span class=""> Bananas</span>
        </div>

        <div>
          <span class=""> Blueberries</span>
          <span class=""> Carrots (steamed)</span>
          <span class=""> Cooked winter squash</span>
        </div>

        <div>
          <span class=""> Green beans and/or Broccoli (steamed only)</span>
          <span class=""> Melon</span>
          <span class=""> Peas</span>
        </div>

        <div>
          <span class=""> Pumpkin</span>
          <span class="">Spinach</span>
        </div>

        <div class="px-48">
          <baes-comment
            label="submit"
            @comment-submit="addNewComment"
            comment="Comment"
          ></baes-comment>
        </div>
        <div v-for="result in commentResults" :key="result.id">
          <div class="">
            <p class="text-purple-600 italic flex ">{{ result.comment }}
            <base-buttons class="ml-8" @click="deleteComment(result.id)" label="Delete">
            </base-buttons></p>
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
      commentResults: []
    }
  },
  methods: {
    async addNewComment(newComment) {
      const res = await fetch(this.url, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          comment: newComment.comment
        })
      })
      const data = await res.json()
      this.commentResults = [...this.commentResults, data]
      this.enteredComment = ""
    },

    async fetchCommentResult() {
      const res = await fetch(this.url)
      const data = await res.json()
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





