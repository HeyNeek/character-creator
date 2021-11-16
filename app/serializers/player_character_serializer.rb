class PlayerCharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :strength, :dex, :con, :intel, :wisdom, :charisma

  belongs_to :user 
  belongs_to :race 
end
