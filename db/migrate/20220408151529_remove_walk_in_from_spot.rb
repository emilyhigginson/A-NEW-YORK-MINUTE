class RemoveWalkInFromSpot < ActiveRecord::Migration[6.1]
  def change
    remove_column :spots, :walk_in, :boolean
  end
end
