class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :likes, :image, :user_id

  belongs_to :user
  has_many :tags
end
