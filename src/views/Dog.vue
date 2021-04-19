<template>
  <div class="mx-10">
    <div class="Dog">
      <h1 class="topic">Fruits and Vegetables that are Safe for Dogs</h1>

      <div class="space-y-6 text-left">
        <div>
          Dogs are omnivores, meaning they can eat meat or plant-based food. In
          fact, most dog kibble is a combination of meat protein and vegetable
          matter. One way you can enrich your dog’s diet is by adding extra
          fruits and vegetables on top of their kibble. This can be especially
          beneficial for dog’s suffering from weight problems or diseases, like
          diabetes. With that said, your canine companion can enjoy the taste
          and nutritional benefits of a large variety of different fruits and
          vegetables. Some of the healthiest fruits and veggies for dogs include
        </div>
        <div>
          <span class="textgreen"> Apples : </span> These are a great source of
          Vitamins A & C, and packed full of fiber to keep your dog’s digestive
          system working effectively. Just be sure to remove the core and seeds
          before feeding an apple to your pet.
        </div>

        <div>
          <span class="textgreen"> Bananas : </span> Rich in potassium,
          vitamins, and copper, bananas are exceptionally sweet, and they’re
          also safe for your furbaby to eat. Due to their high sugar content,
          bananas should only be given occasionally and regarded firmly as a
          treat.
        </div>

        <div>
          <span class="textgreen"> Blueberries : </span>
          Blueberries are full of antioxidants and fiber, which can help defend
          your pet from cancer.
        </div>

        <div>
          <span class="textgreen"> Broccoli: </span>
          This dark green vegetable is safe for your pet to eat, but only in
          very small quantities, as broccoli is fibrous and can lead to
          diarrhea.
        </div>

        <div>
          <span class="textgreen">Brussel sprouts : </span>
          Beware - the gassy effects of these vegetables are just as prevalent
          in dogs as they are in humans!
        </div>

        <div>
          <span class="textgreen"> Cantaloupe : </span>
          Feed this delicious melon sparingly, as it is high in natural sugar.
        </div>

        <div>
          <span class="textgreen"> Carrots : </span>
          Carrots are high in vitamins and fiber, and their fibrous nature can
          brush away tartar, making them good for your dog’s teeth!
        </div>

        <div>
          <span class="textgreen"> Celery : </span>
          Similar to carrots, celery is another low-calorie vegetable that will
          naturally scrub your dog’s teeth.
        </div>

        <div>
          <span class="textgreen"> Cucumbers : </span>
          Cucumbers are safe another safe low-calorie snack for dogs. However,
          don’t feed your pup too much, since it can cause an upset stomach.
        </div>

        <div>
          <span class="textgreen"> Green beans : </span>
          Fresh green beans are chock full of iron and vitamins, making them a
          healthy option for your dog. Remember to only feed your pup fresh
          green beans, as canned ones usually have added salt.
        </div>

        <div>
          <span class="textgreen"> Mango : </span>
          Don’t forget to remove the stone before feeding as it contains a small
          amount of toxic cyanide, and could potentially cause your dog to
          choke. Like bananas, mangoes can be fed as a sweet treat.
        </div>

        <div>
          <span class="textgreen"> Oranges :</span>
          These should be peeled, and all seeds removed before feeding to your
          canine pal to avoid choking hazards.
        </div>

        <div>
          <span class="textgreen"> Peaches :</span>
          Again, cut around the pit and remove it before offering it to your
          furbaby.
        </div>
        <div>
          <span class="textgreen"> Pears :</span>
          Don’t forget to remove the pit and stones from pears too!
        </div>
        <div>
          <span class="textgreen"> Potato :</span>
          Stick with boiled, plain varieties. If your dog is prone to an upset
          stomach, a good mealtime option is plain boiled chicken and potatoes
          with no added ingredients.
        </div>

        <div class="px-48">
          <baes-comment
            label="submit"
            @comment-submit="addNewComment"
            comment="Comment"
          ></baes-comment>
        </div>
        <div class="px-48">
          <label>Edit</label>
          <input
            class="input form-control"
            id="url"
            type="text"
            v-model="inputlink"
            placeholder="Type your message and press EDIT."
          />
        </div>
        <div v-for="result in commentResults" :key="result.id" class="Center">
          <div class="">
            <p class="text-purple-600 italic flex">
              {{ result.comment }}

              <base-buttons class="ml-8" @click="editCheckComment(result.id)">
                EDIT
              </base-buttons>

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
      // isEdit: false,
      // editId: '',
      url: "http://localhost:5050/commentResults",
      commentResults: [],
      inputlink: "",
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
    async editCheckComment(editingCheckComment) {
      try {
        const res = await fetch(`${this.url}/${editingCheckComment}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            comment: this.inputlink,
          }),
        });
        const data = await res.json();

        this.commentResults = this.commentResults.map((checkComment) =>
          checkComment.id === editingCheckComment
            ? { ...checkComment, comment: data.comment }
            : checkComment
        );
        this.isEdit = false;
        this.editId = "";
        this.editingCheckComment = "";
      } catch (error) {
        console.log(`Could not edit! ${error}`);
      }
    },
  },

  async created() {
    this.commentResults = await this.fetchCommentResult();
  },
};
</script>