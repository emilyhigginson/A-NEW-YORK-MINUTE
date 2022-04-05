class CreateSpots < ActiveRecord::Migration[6.1]
  def change
    create_table :spots do |t|
      t.string :name
      t.string :image
      t.string :location
      t.string :category
      t.integer :price_range
      t.boolean :walk_in

      t.timestamps
    end
  end
end
