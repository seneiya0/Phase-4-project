class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :body
      t.integer :likes
      t.integer :user_id
      t.integer :tag_id
      t.string :image

      t.timestamps
    end
  end
end
