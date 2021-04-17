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

  },
  emits: ["comment-submit"],
  data() {
    return {
      url: "http://localhost:5050/commentResults",
      commentResults: [],
      enteredComment: "",
      invalidCommentInput: false,
      isEdit: false,
      editId: '',
    };
  },
  methods: {
    submitForm() {
      this.invalidCommentInput = this.enteredComment === "" ? true : false;
      console.log(`Comment value: ${this.enteredComment}`);
      console.log(`invalid Comment: ${this.invalidCommentInput}`);

       if (this.enteredComment === '') {
      //   if (this.isEdit) {
      //     this.editCheckComment({
      //       id: this.editId,
      //       comment: this.enteredComment
           
      //     })
      //   } else {
      //     this.addNewComment({
      //     comment: this.enteredComment
      //     })
      //   }}

        this.addNewComment({
          comment: this.enteredComment,
        })
      }else {
        this.saveComment();
      }},
    // this.enteredName = ''},
    
//     showData(oldComment) {
//       this.isEdit = true
//       this.editId = oldComment.id
//       this.enteredComment = oldComment.comment
//     },

//  async editCheckComment(editingCheckComment) {
//       try {
//         const res = await fetch(`${this.url}/${editingCheckComment.id}`, {
//           method: 'PUT',
//           headers: {
//             'content-type': 'application/json'
//           },
//           body: JSON.stringify({
//             comment: editingCheckComment.comment,
//           })
//         })
//         const data = await res.json()
//         this.checkComment = this.checkComment.map((checkComment) =>
//           checkComment.id === editingCheckComment.id
//             ? { ...checkComment, comment: data.comment }
//             : checkComment
//         )
//         this.isEdit = false
//         this.editId = ''
//         this.editingCheckComment = ''
//       } catch (error) {
//         console.log(`Could not edit! ${error}`)
//       }
//     },


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