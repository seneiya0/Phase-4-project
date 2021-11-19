User.create!(username: "sam", password:"sam", image:"https://www.allgoldenretriever.com/wp-content/uploads/2020/03/7-Ways-to-Find-a-Quality-Golden-Retriever-Puppy.jpg?ezimgfmt=ng%3Awebp%2Fngcb1");
User.create!(username: "dagoons", password:"asdf", image:"https://i.imgur.com/lI6AQTi.jpg");
User.create!(username: "barley", password:"asdf", image:"https://www.grxstatic.com/4f3rgqwzdznj/2c1XvjFLwNB5xV9mx1sM8E/704240b41060fdf75603b77ffa08284d/Michigan.png?format=png&auto=webp&width=704");
User.create!(username: "mooster", password:"asdf", image:"https://media.discordapp.net/attachments/888526415228731416/911108055045898290/IMG_1872.png?width=318&height=566");
User.create!(username: "duangFanboy", password:"asdf", image:"https://i.pinimg.com/originals/17/c0/c3/17c0c3f023d615fe03556b5a4288b04f.jpg");
User.create!(username: "alanCinsavich", password:"123", image:"../src/assets/T02MD9XTF-U020EM6FP3K-afe8eabf18aa-512.jpg");
User.create!(username: "clanAinsavich", password:"123", image:"https://cdn.discordapp.com/attachments/888526415228731416/910351885909757962/ALC.png");
User.create!(username: "Henri", password:"123", image:"https://i.ytimg.com/vi/n7hQPaOWwdI/maxresdefault.jpg");
User.create!(username: "Cozi", password:"123", image:"https://cdn.shopify.com/s/files/1/0541/1546/7434/collections/0f40ef12f686314fc36c32bf22a4f164_1270x1270.jpg?v=1628673146");

# Eric & Henri
Post.create!(title: "My goal is to lose weight", body: "Today I will go for a run and lose weight so I can attack Meric more effectively. I will take over his place and soon rule the world", likes: 11, image: "https://c.tenor.com/IJJMO9ul194AAAAC/yes-evil.gif", user_id: 8)

# Moose
Post.create!(title: "I am a champion!", body: "Hooray! I just destroy everyone at the most prestigious tennis tournament in the world: The Wimbledon!", likes: 10, image: "https://c.tenor.com/Qvn4Wf54X6cAAAAM/tennis-dance.gif", user_id: 4)

# Alan
Post.create!(title: "Like my joke please", body: "If a seagull lives at the sea, what lives at the bay? BAHAHA", likes: 68, image: "https://external-preview.redd.it/CTRRCaS9IkqgkqYgha0dNWj0NTheXHWevB7-w0IIlY0.jpg?auto=webp&s=266b8dd53d469f09efd04bcfad84e40dc0804768", user_id: 7)

# Seneiya
Post.create!(title: "React is the best", body: "I carried my partner to the finish line as I became one with React and became a coding Goddess.", likes: 11, image: "https://i.pinimg.com/originals/dd/71/1b/dd711be0cf3eae016715eb4189218a6c.gif", user_id: 9)

# Eric & Henri
Post.create!(title: "Meric called me fat", body: "Today is the 5th day where I have not eaten yet and Meric is calling me a fat chump... I am in need of food and emotional support. Someone save me", likes: 11, image: "", user_id: 8)

# Charlie
Post.create!(title: "What did I miss", body: "I went to go get coffee, and now its 2021. What did I miss? ", likes: 10, image: "", user_id: 3)

# Sam
Post.create!(title: "woof", body: "woof woof woof woof bark bark woooooof", likes: 5, image: "https://c.tenor.com/_NMzaxfKAJYAAAAM/excited-dog.gif", user_id: 1)

# Quang
Post.create!(title: "I love you twice <3", body: "I love twice!! Sana is my bias and I will never let anyone talk trash about her! Fighting ^-^", likes: 16, image: "https://c.tenor.com/PVxg9fE8paUAAAAM/sana-twice.gif", user_id: 5)

# Alan
Post.create!(title: "My internet is broken", body: "Hello this is a message from my iphone. I enjoy photography and had a blast working with everyone in Flat Iron! Love yall :)", likes: 68, image: "../src/assets/T02MD9XTF-U020EM6FP3K-afe8eabf18aa-512.jpg", user_id: 6)

# Seneiya
Post.create!(title: "React is the best", body: "I carried my partner to the finish line as I became one with React and became a coding Goddess.", likes: 11, image: "https://i.pinimg.com/originals/dd/71/1b/dd711be0cf3eae016715eb4189218a6c.gif", user_id: 9)

# Goons
Post.create!(title: "Meet the family", body: "Hello my name is Mr. Alan. I love my family and our fan club makes me smile every single day! One day we will all blossom and show the world how beautiful our hearts are.", likes: 16, image: "", user_id: 2)

# Sam
Post.create!(title: "woof", body: "woof woof woof woof woooooof", likes: 7, image: "https://static.boredpanda.com/blog/wp-content/uploads/2020/11/200-5fc50a8f7e1c2__700.jpg", user_id: 1)

# Charlie
Post.create!(title: "Fix the enviornment", body: "The moment I thought I was free, another issue appears and I am stuck fixing the enviornment.", likes: 10, image: "https://media4.giphy.com/media/l1KVcrdl7rJpFnY2s/giphy.gif", user_id: 3)

# Alan
Post.create!(title: "Lost but found", body: "As I sit in the sunset of the day coming to an end, I once again find myself sitting on the forest floor. Where am I? When did I get here?", likes: 68, image: "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Perfect-Sunset-Nature-Background-Image.jpeg", user_id: 7)

Tag.create!(name: "funny")
Tag.create!(name: "sports")
Tag.create!(name: "happy")
Tag.create!(name: "smile")
Tag.create!(name: "joke")
Tag.create!(name: "dankmeme")
Tag.create!(name: "sad")
Tag.create!(name: "life")
Tag.create!(name: "art")
Tag.create!(name: "alan")
Tag.create!(name: "food")
Tag.create!(name: "coding")
Tag.create!(name: "style")
Tag.create!(name: "fancy")
Tag.create!(name: "eggs")


PostTag.create!(post_id: 14, tag_id: 1)
PostTag.create!(post_id: 14, tag_id: 8)
PostTag.create!(post_id: 14, tag_id: 10)
PostTag.create!(post_id: 14, tag_id: 9)

PostTag.create!(post_id: 13, tag_id: 7)
PostTag.create!(post_id: 13, tag_id: 8)
PostTag.create!(post_id: 13, tag_id: 10)

for i in 1..12 do
    for j in 1..4 do
        PostTag.create!(post_id: i, tag_id: rand(1..15))
    end
end