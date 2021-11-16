class PlayerCharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url 

  belongs_to :user 
  belongs_to :race 
end
