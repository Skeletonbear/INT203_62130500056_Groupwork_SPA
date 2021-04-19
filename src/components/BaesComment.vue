<template>
  <div class="form-group">
    <form @submit.prevent="submitForm">
        <label for="comment">{{ comment }}</label>
        <input class="form-control"  id="comment"
          :class="{ 'bg-red-50': invalidCommentInput }"
          type="text"
          v-model.trim="enteredComment"
          @blur="validateComment">

        <p v-if="invalidCommentInput" class="text-red-500">
          Please enter your Comment!
        </p>
        <base-buttons  label="submit" />
    </form>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: String,
      required: false,
    },
    oldId: {
      type: Number,
      required: false,
      default: null
    },
    oldComment: {
      type: String,
      required: false,
      default: ''
    }
  },
  emits: ["comment-submit"],
  data() {
    return {
      url: "http://localhost:5050/commentResults",
      commentResults: [],
      enteredComment: this.oldComment,
      invalidCommentInput: false,
      id: this.oldId,
    };
  },
  methods: {
    submitForm() {
      this.invalidCommentInput = this.enteredComment === "" ? true : false;
      console.log(`Comment value: ${this.enteredComment}`);
      console.log(`invalid Comment: ${this.invalidCommentInput}`);

       if (this.enteredComment === '') {

        this.addNewComment({
          comment: this.enteredComment,
        })
      }else {
        this.saveComment();
      }},
    
    saveComment() {
      let commentResults = {
        comment: this.enteredComment,
      };
      this.$emit("comment-submit", commentResults);
    },
    validateComment() {
      this.invalidCommentInput = this.enteredComment === '' ? true : false
      console.log(`name: ${this.invalidCommentInput}`)
    }
  },
};
</script>