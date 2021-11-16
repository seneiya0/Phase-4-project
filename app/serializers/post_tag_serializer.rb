class PostTagSerializer < ActiveModel::Serializer
  attributes :id, :post_id, :tag_id
end
