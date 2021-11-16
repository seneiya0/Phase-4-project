User.create!(username: "sam", password:"sam", image:"123");
User.create!(username: "asdf", password:"hj4h", image:"qwe");
User.create!(username: "efe", password:"asdf", image:"jfghj");
User.create!(username: "1234123", password:"s123", image:"zef");

Tag.create!(name: "funny")
Tag.create!(name: "art")
Tag.create!(name: "sad")

Post.create!(title: "hello", body: "iassasdfasdfaadfadts", likes: 0, image: "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Perfect-Sunset-Nature-Background-Image.jpeg", user_id: 1)
Post.create!(title: "poo", body: "nasasdfasdfdadaso", likes: 10, image: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/07/solar_orbiter_s_first_views_of_the_sun5/22136942-2-eng-GB/Solar_Orbiter_s_first_views_of_the_Sun_pillars.gif", user_id: 2)
Post.create!(title: "mtmtymty", body: "afasdfasdfasdf123123s", likes: 0, image: "https://media1.popsugar-assets.com/files/thumbor/YW5HqqfTlaHdYBG0F4DWW68lN78/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/05/22/880/n/1922153/a01e93b95ec8311f375e90.74475107_/i/Funny-Beauty-Memes.jpg", user_id: 3)
Post.create!(title: "adf", body: "itsasdfasdfsdasdsads", likes: 10, image: "https://www.planetware.com/wpimages/2019/12/washington-dc-in-pictures-most-beautiful-places-to-visit-jefferson-memorial.jpg", user_id: 4)
Post.create!(title: "story", body: "one day when i ate broccoli i also had some apple juice fghdsg fdgshfgds gfdshgfhasfds gfhdsgg dsgdsh fdsgghjhhds gfdbhfg dsfhdsg hgfdshjg dfggdsh ghjds.", likes: 10, image: "", user_id: 1)

PostTag.create!(tag_id: 1, post_id: 1)
PostTag.create!(tag_id: 2, post_id: 1)
PostTag.create!(tag_id: 3, post_id: 1)
PostTag.create!(tag_id: 1, post_id: 2)
PostTag.create!(tag_id: 1, post_id: 3)
PostTag.create!(tag_id: 2, post_id: 2)
PostTag.create!(tag_id: 3, post_id: 1)
PostTag.create!(tag_id: 3, post_id: 3)