class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :likes, :image, :user_id
end
