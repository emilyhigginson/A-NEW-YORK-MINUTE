class AddLngToSpot < ActiveRecord::Migration[6.1]
  def change
    add_column :spots, :lng, :float
  end
end
