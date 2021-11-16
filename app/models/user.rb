class User < ApplicationRecord
    has_many :posts
    
    validates :username, :password, presence: true

    has_secure_password

end
