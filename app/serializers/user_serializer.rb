class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image, :created_at
end
