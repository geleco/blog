var commentsByPostId = {
    1: [
        {
            id: 1,
            postId: 1,
            email: "Gendalf: gandalf@example.com",
            body: "Great post! I always enjoy reading about the peaceful life of hobbits.",
        },
        {
            id: 2,
            postId: 1,
            email: "Frodo: frodo@example.com",
            body: "Thank you, Bilbo! Your stories inspire me to go on my own adventures.",
        },
        {
            id: 3,
            postId: 1,
            email: "Sam: sam@example.com",
            body: "I couldn't agree more, Bilbo. Life in the Shire is truly something special.",
        },
    ],
    2: [
        {
            id: 4,
            postId: 2,
            email: "Aragorn: aragorn@example.com",
            body: "Greetings! The alert is of great concern. We must act swiftly to protect our orchards.",
        },
        {
            id: 5,
            postId: 2,
            email: "Legolas: legolas@example.com",
            body: "I agree, Samwise. We should consider setting up traps or natural deterrents to keep the wild animals away.",
        },
        {
            id: 6,
            postId: 2,
            email: "Gimili: gimli@example.com",
            body: "Samwise, I'll join the night patrols to help secure our orchards. We shall not let them fall!",
        },
    ],
    3: [
        {
            id: 7,
            postId: 3,
            email: "Frodo: frodo@example.com",
            body: "Peregrin, your reflections on the Shire are inspiring. We can make a difference together.",
        },
        {
            id: 8,
            postId: 3,
            email: "Merry: merry@example.com",
            body: "I completely agree, Peregrin. Let's organize community events to foster unity and environmental awareness.",
        },
        {
            id: 9,
            postId: 3,
            email: "Arwen: arwen@example.com",
            body: "Your words resonate with my heart, Peregrin. I pledge my support to the preservation of the Shire.",
        },
    ],
    4: [
        {
            id: 10,
            postId: 4,
            email: "Legolas: legolas@example.com",
            body: "Frodo, your adventures beyond the Shire inspire us all to seek the unknown and embrace new experiences.",
        },
        {
            id: 11,
            postId: 4,
            email: "Gandlf: gandalf@example.com",
            body: "Indeed, Frodo. Your courage in the face of danger is commendable. You've grown into a true hero.",
        },
        {
            id: 12,
            postId: 4,
            email: "Aragorn: aragorn@example.com",
            body: "Frodo, your journey reminds us that the world is vast and full of wonders. Thank you for sharing your experiences.",
        },
    ],
    5: [
        {
            id: 13,
            postId: 5,
            email: "Pippin: pippin@example.com",
            body: "Merry, your recipes for Second Supper make my mouth water. I can't wait to try them!",
        },
        {
            id: 14,
            postId: 5,
            email: "Sam: sam@example.com",
            body: "Merry, your culinary skills are unmatched. I'm excited to learn from you and create delicious meals.",
        },
        {
            id: 15,
            postId: 5,
            email: "Frodo: frodo@example.com",
            body: "Merry, your recipes bring back fond memories of our shared meals. I miss our time together in the Shire.",
        },
    ],
    6: [
        {
            id: 16,
            postId: 6,
            email: "Aragoorn: aragorn@example.com",
            body: "Samwise, your opinion on gardens resonates deeply with me. They are indeed valuable sanctuaries.",
        },
        {
            id: 17,
            postId: 6,
            email: "Legolas:legolas@example.com",
            body: "I couldn't agree more, Samwise. Gardens bring peace and remind us of the beauty of nature.",
        },
        {
            id: 18,
            postId: 6,
            email: "Frodo: frodo@example.com",
            body: "Samwise, your words inspire me to create my own garden one day. Thank you for sharing your thoughts.",
        },
    ],
};
var posts2 = [
    {
        id2: 1,
        title: "The Calm Life of a Hobbit",
        author: "Bilbo Bolseiro",
        content: "Hello, everyone! I am Bilbo Baggins, and this is my first post on our beloved blog. I would like to share a little bit about the daily life of a hobbit, which, as you know, is surrounded by tranquility and simplicity. Let's explore together the pleasures of a good meal, walks through the Hobbiton, and our famous festivities. A hobbit's life is marked by peace and the enjoyment of simple things. We spend our days tending to our gardens, harvesting fresh vegetables, and delighting in hearty meals. We also love sharing stories and songs around the fire, warming our hearts and strengthening the bonds of our community. Join me on this peaceful adventure and discover how hobbits find joy in the simple things and cherish moments of rest and companionship with our dear neighbors. Together, we will explore the charm of life in the Shire and the traditions that make us unique!",
        imageUrl: "blog/img/img_post1_bilbo.jpg",
    },
    {
        id2: 2,
        title: "Alert: Attack on the Orchards!",
        author: "Samwise Gamgee",
        content: "Hello, fellow hobbits! I am Samwise Gamgee, and I bring an important alert. Recently, some orchards have been attacked by wild animals, putting our supply of fruits and vegetables at risk. It saddens me to see our beloved orchards suffering from these attacks. Fruits are an essential part of our diet, and furthermore, our hard work is rewarded with abundant harvests. We need to take action to protect our crops and ensure the continuation of a healthy and plentiful food supply. I appeal to all hobbits to remain vigilant and contribute with solutions. We can strengthen the orchards' fences, utilize animal deterrent techniques, or even create night patrols to ensure security. Together, we can preserve our orchards and maintain balance between the Shire and nature.",
        imageUrl: "blog/img/img_post2_alert.jpg",
    },
    {
        id2: 3,
        title: "Reflections on the Shire",
        author: "Peregrin Tûk",
        content: "Greetings, friends! Peregrin Took here, and today I want to share some reflections about our beloved Shire. We have an amazing community, but I believe we can do even more to make it a better place. The Shire is our home, and we must preserve it. We have the responsibility to take care of our environment, ensure that our natural resources are used sustainably, and maintain harmony between the inhabitants and nature. It is also important to strengthen the bonds among hobbits, reaching out to one another in times of need and celebrating together in moments of joy. I invite you to share your ideas, concerns, and suggestions to make the Shire an example of a united and conscious community. Let's discuss ways to promote environmental preservation, solidarity, and collaboration. Together, we can build a bright future for all of us!",
        imageUrl: "blog/img/img_post3_reflections.jpg",
    },
    {
        id2: 4,
        title: "Adventures Beyond the Shire",
        author: "Frodo Bolseiro",
        content: "Dear readers, Frodo Baggins here! Today, I want to tell you about the incredible adventures I recently experienced beyond the boundaries of the Shire. From encounters with elves to challenges faced in the Shadow Lands, my journey has shown me the vastness and diversity of the world beyond our green hills. Venturing beyond the Shire is a transformative experience. I have met people of different races, faced unimaginable dangers, and tested my own limits. These experiences have broadened my horizons and made me realize that the greatness of the world extends beyond what our eyes can see at home. I want to share with you the wonders I have discovered, the lessons I have learned, and the friendships I have forged. Through my words",
        imageUrl: "blog/img/img_post4_frodo.jpg",
    },
    {
        id2: 5,
        title: "Delicious Recipes for Second Supper",
        author: "Merry Brandebuque",
        content: "Hello, folks! Merry Brandybuck here, and today I want to share with you some delicious recipes for Second Supper. After all, we all know that hobbits love to eat! Get ready to savor cakes, pies, and other treats that will delight your taste buds. Second Supper is a special moment in our lives when we gather friends and family to share moments of joy around the table. Our recipes are traditional, passed down from generation to generation, and carry with them all the love and care involved in hobbit cuisine. Stay tuned for upcoming posts where I will share step-by-step instructions on how to prepare a melt-in-your-mouth apple pie, a fluffy carrot cake, and other delights that will enchant everyone. Let's indulge together and celebrate the pleasure of sharing a good meal in good company!",
        imageUrl: "blog/img/img_post5_food.jpg",
    },
    {
        id2: 6,
        title: "Opinion: The Importance of Gardens",
        author: "Samwise Gamgee",
        content: "Hey, folks! Samwise Gamgee here again. Today, I want to share my opinion on the importance of gardens in our lives. Gardens connect us with nature, bring beauty, and teach us the value of patience and care. As hobbits, we treasure our gardens as an extension of our homes. In them, we cultivate colorful flowers that adorn our houses, aromatic herbs that add flavor to our meals, and fresh vegetables that nourish us. Moreover, gardens are spaces of tranquility and contemplation where we can disconnect from the outside world and find inner peace. I invite you to reflect on the importance of cultivating a piece of land, no matter how small. Let's share gardening tips, discuss the benefits of having plants around us, and inspire each other to take care of the nature that surrounds us. Together, we can make a difference by cultivating beauty and harmony in our lives and in our beloved Shire.",
        imageUrl: "blog/img/img_post6_opinion.jpg",
    },
];
function goBack() {
    window.location.href = 'index.html';
}
function getPostById(id) {
    return posts2.find(function (post) { return post.id2 === id; });
}
function displayPost() {
    var _a;
    var urlParams = new URLSearchParams(window.location.search);
    var postId = parseInt((_a = urlParams.get('id')) !== null && _a !== void 0 ? _a : '', 10);
    var post = getPostById(postId);
    if (post) {
        var postImageElement = document.getElementById('post-imageUrl');
        var postTitleElement = document.getElementById('post-title');
        var postContentElement = document.getElementById('post-content');
        if (postImageElement) {
            postImageElement.setAttribute('src', post.imageUrl);
        }
        if (postTitleElement) {
            postTitleElement.innerText = post.title;
        }
        if (postContentElement) {
            postContentElement.innerText = post.content;
        }
        else {
            console.error('Post not found');
        }
        var commentsContainer_1 = document.getElementById('comments-list');
        if (commentsContainer_1) {
            var postComments = commentsByPostId[post.id2];
            if (postComments) {
                postComments.forEach(function (comment) {
                    var commentElement = document.createElement('div');
                    commentElement.className = 'comment';
                    commentElement.innerHTML = "\n            <div id=\"comment-email\">".concat(comment.email, "</div>\n            <div id=\"comment-body\">").concat(comment.body, "</div>\n            <div id=\"comment-divider\"></div>\n          ");
                    commentsContainer_1.appendChild(commentElement);
                });
            }
        }
    }
    else {
        console.error('Post not found');
    }
}
var backButton = document.getElementById('back-button');
if (backButton) {
    backButton.addEventListener('click', goBack);
}
window.addEventListener('DOMContentLoaded', displayPost);
