const Post = require("./Post");

class Author {
  constructor(author) {
    this.author = author;
    this.posts = [];
  }

  createPost(titlePost, contentPost) {
    const post = new Post(this, titlePost, contentPost);
    this.posts.push(post);
    return post;
  }
}

const aut = new Author("Gabriel");

aut.createPost("Loucura", "lorem ipsum");

console.log(aut);
module.exports = Author;
