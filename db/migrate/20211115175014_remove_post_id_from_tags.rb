class RemovePostIdFromTags < ActiveRecord::Migration[6.1]
  remove_column :tags, :post_id
end
