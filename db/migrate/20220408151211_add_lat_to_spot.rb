class AddLatToSpot < ActiveRecord::Migration[6.1]
  def change
    add_column :spots, :lat, :float
  end
end
