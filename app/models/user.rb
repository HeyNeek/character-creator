class User < ApplicationRecord
    has_secure_password
    
    has_many :player_characters
end
