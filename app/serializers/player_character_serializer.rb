class PlayerCharacterSerializer < ActiveModel::Serializer
  attributes :id, :race_id, :name, :image_url, :race

  belongs_to :user 
end
