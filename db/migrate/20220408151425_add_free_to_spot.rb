class AddFreeToSpot < ActiveRecord::Migration[6.1]
  def change
    add_column :spots, :free, :boolean
  end
end
