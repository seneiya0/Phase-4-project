User.create!(username: "Sam", password:"sam", image:"https://www.allgoldenretriever.com/wp-content/uploads/2020/03/7-Ways-to-Find-a-Quality-Golden-Retriever-Puppy.jpg?ezimgfmt=ng%3Awebp%2Fngcb1");
User.create!(username: "DaGoons", password:"asdf", image:"https://i.imgur.com/lI6AQTi.jpg");
User.create!(username: "Barley", password:"asdf", image:"https://www.grxstatic.com/4f3rgqwzdznj/2c1XvjFLwNB5xV9mx1sM8E/704240b41060fdf75603b77ffa08284d/Michigan.png?format=png&auto=webp&width=704");
User.create!(username: "Mooster", password:"asdf", image:"https://media.discordapp.net/attachments/888526415228731416/911108055045898290/IMG_1872.png?width=318&height=566");
User.create!(username: "DuangFanBoy", password:"asdf", image:"https://i.pinimg.com/originals/17/c0/c3/17c0c3f023d615fe03556b5a4288b04f.jpg");
User.create!(username: "AlanCinsavich", password:"123", image:"../src/assets/T02MD9XTF-U020EM6FP3K-afe8eabf18aa-512.jpg");
User.create!(username: "ClanAinsavich", password:"123", image:"https://cdn.discordapp.com/attachments/888526415228731416/910351885909757962/ALC.png");
User.create!(username: "Henri", password:"123", image:"https://i.ytimg.com/vi/n7hQPaOWwdI/maxresdefault.jpg");

Tag.create!(name: "funny")
Tag.create!(name: "music")
Tag.create!(name: "happy")
Tag.create!(name: "smile")
Tag.create!(name: "joke")
Tag.create!(name: "dankmeme")
Tag.create!(name: "sad")
Tag.create!(name: "anime")
Tag.create!(name: "art")

Post.create!(title: "Lost but found", body: "As I sit in the sunset of the day coming to an end, I once again find myself sitting on the forest floor. Where am I? When did I get here?", likes: 68, image: "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Perfect-Sunset-Nature-Background-Image.jpeg", user_id: 7)

Post.create!(title: "I'm a champion!", body: "Hooray! I just destroy everyone at the most prestigious tennis tournament in the world: The Wimbledon!", likes: 10, image: "https://c.tenor.com/Qvn4Wf54X6cAAAAM/tennis-dance.gif", user_id: 4)

Post.create!(title: "Meric called me fat", body: "Today is the 5th day where I have not eaten yet and Meric is calling me a fat chump... I am in need of food and emotional support. Someone save me", likes: 0, image: "", user_id: 8)

Post.create!(title: "adf", body: "itsasdfasdfsdasdsads", likes: 10, image: "https://www.planetware.com/wpimages/2019/12/washington-dc-in-pictures-most-beautiful-places-to-visit-jefferson-memorial.jpg", user_id: 4)

Post.create!(title: "story", body: "one day when i ate broccoli i also had some apple juice fghdsg fdgshfgds gfdshgfhasfds gfhdsgg dsgdsh fdsgghjhhds gfdbhfg dsfhdsg hgfdshjg dfggdsh ghjds.", likes: 10, image: "https://static.onecms.io/wp-content/uploads/sites/20/2021/04/21/dog-nose.jpg", user_id: 7)

25.times do
    PostTag.create!(tag_id: rand(1..9), post_id: rand(1..5))
end