class PostDetailSerializer < PostSerializer
  has_many :tags
  belongs_to :user
end
