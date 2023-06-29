var posts2 = [
    {
        id: 1,
        title: "The Calm Life of a Hobbit",
        author: "Bilbo Bolseiro",
        content: "Hello, everyone! I am Bilbo Baggins, and this is my first post on our beloved blog. I would like to share a little bit about the daily life of a hobbit, which, as you know, is surrounded by tranquility and simplicity. Let's explore together the pleasures of a good meal, walks through the Hobbiton, and our famous festivities. A hobbit's life is marked by peace and the enjoyment of simple things. We spend our days tending to our gardens, harvesting fresh vegetables, and delighting in hearty meals. We also love sharing stories and songs around the fire, warming our hearts and strengthening the bonds of our community. Join me on this peaceful adventure and discover how hobbits find joy in the simple things and cherish moments of rest and companionship with our dear neighbors. Together, we will explore the charm of life in the Shire and the traditions that make us unique!",
        imageUrl: "blog/img/img_post1_bilbo.jpg",
    },
    {
        id: 2,
        title: "Alert: Attack on the Orchards!",
        author: "Samwise Gamgee",
        content: "Hello, fellow hobbits! I am Samwise Gamgee, and I bring an important alert. Recently, some orchards have been attacked by wild animals, putting our supply of fruits and vegetables at risk. It saddens me to see our beloved orchards suffering from these attacks. Fruits are an essential part of our diet, and furthermore, our hard work is rewarded with abundant harvests. We need to take action to protect our crops and ensure the continuation of a healthy and plentiful food supply. I appeal to all hobbits to remain vigilant and contribute with solutions. We can strengthen the orchards' fences, utilize animal deterrent techniques, or even create night patrols to ensure security. Together, we can preserve our orchards and maintain balance between the Shire and nature.",
        imageUrl: "blog/img/img_post2_alert.jpg",
    },
    {
        id: 3,
        title: "Reflections on the Shire",
        author: "Peregrin Tûk",
        content: "Greetings, friends! Peregrin Took here, and today I want to share some reflections about our beloved Shire. We have an amazing community, but I believe we can do even more to make it a better place. The Shire is our home, and we must preserve it. We have the responsibility to take care of our environment, ensure that our natural resources are used sustainably, and maintain harmony between the inhabitants and nature. It is also important to strengthen the bonds among hobbits, reaching out to one another in times of need and celebrating together in moments of joy. I invite you to share your ideas, concerns, and suggestions to make the Shire an example of a united and conscious community. Let's discuss ways to promote environmental preservation, solidarity, and collaboration. Together, we can build a bright future for all of us!",
        imageUrl: "blog/img/img_post3_reflections.jpg",
    },
    {
        id: 4,
        title: "Adventures Beyond the Shire",
        author: "Frodo Bolseiro",
        content: "Dear readers, Frodo Baggins here! Today, I want to tell you about the incredible adventures I recently experienced beyond the boundaries of the Shire. From encounters with elves to challenges faced in the Shadow Lands, my journey has shown me the vastness and diversity of the world beyond our green hills. Venturing beyond the Shire is a transformative experience. I have met people of different races, faced unimaginable dangers, and tested my own limits. These experiences have broadened my horizons and made me realize that the greatness of the world extends beyond what our eyes can see at home. I want to share with you the wonders I have discovered, the lessons I have learned, and the friendships I have forged. Through my words",
        imageUrl: "blog/img/img_post4_frodo.jpg",
    },
    {
        id: 5,
        title: "Delicious Recipes for Second Supper",
        author: "Merry Brandebuque",
        content: "Hello, folks! Merry Brandybuck here, and today I want to share with you some delicious recipes for Second Supper. After all, we all know that hobbits love to eat! Get ready to savor cakes, pies, and other treats that will delight your taste buds. Second Supper is a special moment in our lives when we gather friends and family to share moments of joy around the table. Our recipes are traditional, passed down from generation to generation, and carry with them all the love and care involved in hobbit cuisine. Stay tuned for upcoming posts where I will share step-by-step instructions on how to prepare a melt-in-your-mouth apple pie, a fluffy carrot cake, and other delights that will enchant everyone. Let's indulge together and celebrate the pleasure of sharing a good meal in good company!",
        imageUrl: "blog/img/img_post5_food.jpg",
    },
    {
        id: 6,
        title: "Opinion: The Importance of Gardens",
        author: "Samwise Gamgee",
        content: "Hey, folks! Samwise Gamgee here again. Today, I want to share my opinion on the importance of gardens in our lives. Gardens connect us with nature, bring beauty, and teach us the value of patience and care. As hobbits, we treasure our gardens as an extension of our homes. In them, we cultivate colorful flowers that adorn our houses, aromatic herbs that add flavor to our meals, and fresh vegetables that nourish us. Moreover, gardens are spaces of tranquility and contemplation where we can disconnect from the outside world and find inner peace. I invite you to reflect on the importance of cultivating a piece of land, no matter how small. Let's share gardening tips, discuss the benefits of having plants around us, and inspire each other to take care of the nature that surrounds us. Together, we can make a difference by cultivating beauty and harmony in our lives and in our beloved Shire.",
        imageUrl: "blog/img/img_post6_opinion.jpg",
    },
];
function getPostById(id) {
    return posts2.find(function (post) { return post.id === id; });
}
function displayPost() {
    var _a;
    var urlParams = new URLSearchParams(window.location.search);
    var postId = parseInt((_a = urlParams.get('id')) !== null && _a !== void 0 ? _a : '', 10);
    var post = getPostById(postId);
    if (post) {
        var postImageElement = document.getElementById('post-imageUrl');
        var postTitleElement = document.getElementById('post-title');
        var postAuthorElement = document.getElementById('post-author');
        var postContentElement = document.getElementById('post-content');
        if (postImageElement) {
            postImageElement.setAttribute('src', post.imageUrl);
        }
        if (postTitleElement) {
            postTitleElement.innerText = post.title;
        }
        if (postAuthorElement) {
            postAuthorElement.innerText = "Author: ".concat(post.author);
        }
        if (postContentElement) {
            postContentElement.innerText = post.content;
        }
    }
    else {
        console.error('Post not found');
    }
}
window.addEventListener('DOMContentLoaded', displayPost);
