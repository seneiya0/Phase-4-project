class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :likes, :image, :user_id, :created_at

  belongs_to :user
  has_many :tags
end
