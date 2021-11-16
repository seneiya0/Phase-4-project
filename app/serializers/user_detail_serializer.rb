class UserDetailSerializer < UserSerializer
  has_many :posts
end
