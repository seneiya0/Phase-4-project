class Post < ApplicationRecord
    has_many :post_tags
    has_many :tags, through: :post_tags
    belongs_to :user

    validates :title, :body, presence: true
    validates :body, length: { in: 10..200 }

    # def likes
        
    # end
end
