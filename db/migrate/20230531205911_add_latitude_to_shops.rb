class AddLatitudeToShops < ActiveRecord::Migration[7.0]
  def change
    add_column :shops, :latitude, :float
  end
end
