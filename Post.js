const Coment = require("./Coment");

class Post {
  constructor(author, titlePost, contentPost) {
    this.author = author;
    this.titlePost = titlePost;
    this.contentPost = contentPost;
    this.coments = [];
  }

  showPost() {
    console.log(
      `Titulo-> ${this.titlePost}

       Conteúdo-> ${this.contentPost}

       Comentários:: 
       ${this.coments}`
    );
  }
  coment(author, coment) {
    this.coments.push(new Coment(author, coment));
  }
}

module.exports = Post;
