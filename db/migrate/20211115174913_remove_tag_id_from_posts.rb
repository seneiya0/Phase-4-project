class RemoveTagIdFromPosts < ActiveRecord::Migration[6.1]
  remove_column :posts, :tag_id
end
