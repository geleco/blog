interface Post {
    id: number
    title: string;
    author: string;
    content: string;
    imageUrl: string;
  }
  
  const posts: Post[] = [
    {
      id:1,  
      title: "A Vida Tranquila de um Hobbit",
      author: "Bilbo Bolseiro",
      content: "Olá a todos! Sou Bilbo Bolseiro e este é o meu primeiro post no nosso querido blog. Gostaria de compartilhar um pouco sobre o dia a dia de um hobbit, que, como vocês sabem, é cercado de tranquilidade e simplicidade.",
      imageUrl: "img/img_post1_bilbo.jpg"
    },
    {   
      id:2,
      title: "Denúncia: Ataque aos Pomares!",
      author: "Samwise Gamgee",
      content: "Olá, amigos hobbits! Sou Samwise Gamgee e trago uma denúncia importante. Recentemente, alguns pomares foram atacados por animais selvagens, colocando em risco nossa provisão de frutas e vegetais.",
      imageUrl: "img/img_post2_protesto.jpg"
    },
    {
      id:3,
      title: "Reflexões sobre o Condado",
      author: "Peregrin Tûk",
      content: "Saudações, amig@s! Aqui é Peregrin Tûk, e hoje quero compartilhar algumas reflexões sobre o nosso amado Condado. Temos uma comunidade incrível, mas acredito que podemos fazer ainda mais para torná-la um lugar melhor.",
      imageUrl: "img/img_post3_cuidado.jpg"
    },
    {
        id:4,
      title: "Aventuras além do Condado",
      author: "Frodo Bolseiro",
      content: "Caros leitores, aqui é Frodo Bolseiro! Hoje, quero contar a vocês sobre as aventuras incríveis que vivi recentemente fora dos limites do Condado. De encontros com elfos a desafios enfrentados nas Terras Sombrias, minha jornada",
      imageUrl: "img/img_post4_frodo.jpg"
    },
    {
      id:5,
      title: "Receitas Deliciosas de Segunda Ceia",
      author: "Merry Brandebuque",
      content: "Olá, pessoal! Aqui é Merry Brandebuque, e hoje quero compartilhar com vocês algumas receitas deliciosas para a Segunda Ceia. Afinal, todos sabemos que os hobbits adoram comer bastante durante todos os dias da semana!",
      imageUrl: "img/img_post5_food.jpg"
    },
    {
      id:6,
      title: "Opinião: A Importância dos Jardins",
      author: "Samwise Gamgee",
      content: "Oi, gente! Samwise Gamgee novamente por aqui. Hoje, quero compartilhar minha opinião sobre a importância dos jardins em nossas vidas. Os jardins nos conectam com a natureza, trazem beleza e nos ensinam",
      imageUrl: "img/img_post6_jardim.jpg"
    },
  ];
  
  function generatePostsContent(): string {
    let content = '';
  
    posts.forEach((post) => {
      content += `
        <article class="post">
          <img src="${post.imageUrl}" alt="${post.title}" />
          <p>
            <h3>${post.title}</h3>
            ${post.content} <strong>expandir</strong>
          </p>
        </article>
      `;
    });
  
    return content;
  }
  
  function displayPosts(): void {
    const postsContainer = document.getElementById('posts-container');
    if (postsContainer) {
      postsContainer.innerHTML = generatePostsContent();
    }
  }

  window.addEventListener('DOMContentLoaded', displayPosts);
  