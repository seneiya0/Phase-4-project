User.create!(username: "sam", password:"sam", image:"123");
User.create!(username: "asdf", password:"hj4h", image:"qwe");
User.create!(username: "efe", password:"asdf", image:"jfghj");
User.create!(username: "1234123", password:"s123", image:"zef");

Tag.create!(name: "funny")
Tag.create!(name: "art")
Tag.create!(name: "sad")

Post.create!(title: "hello", body: "iassasdfasdfaadfadts", likes: 0, image: "me", user_id: 1)
Post.create!(title: "poo", body: "nasasdfasdfdadaso", likes: 10, image: "who", user_id: 2)
Post.create!(title: "mtmtymty", body: "afasdfasdfasdf123123s", likes: 0, image: "you", user_id: 3)
Post.create!(title: "adf", body: "itsasdfasdfsdasdsads", likes: 10, image: "me", user_id: 4)

PostTag.create!(tag_id: 1, post_id: 1)
PostTag.create!(tag_id: 2, post_id: 1)
PostTag.create!(tag_id: 3, post_id: 1)
PostTag.create!(tag_id: 1, post_id: 2)
PostTag.create!(tag_id: 1, post_id: 3)
PostTag.create!(tag_id: 2, post_id: 2)
PostTag.create!(tag_id: 3, post_id: 1)
PostTag.create!(tag_id: 3, post_id: 3)