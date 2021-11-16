class User < ApplicationRecord
    has_secure_password
    
    has_many :player_characters

    validates :username, presence: true, uniqueness: true
end
