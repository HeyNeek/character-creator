class PlayerCharacter < ApplicationRecord
    belongs_to :user 
    belongs_to :race 
end
