class CreatePlayerCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :player_characters do |t|
      t.integer :user_id
      t.integer :race_id
      t.integer :class_id
      t.integer :background_id
      t.string :name
      t.string :image_url
      t.integer :strength
      t.integer :dex
      t.integer :con
      t.integer :intel
      t.integer :wisdom
      t.integer :charisma

      t.timestamps
    end
  end
end
