class RemovePriceRangeFromSpot < ActiveRecord::Migration[6.1]
  def change
    remove_column :spots, :price_range, :integer
  end
end
