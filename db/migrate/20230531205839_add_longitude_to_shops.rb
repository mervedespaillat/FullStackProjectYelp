class AddLongitudeToShops < ActiveRecord::Migration[7.0]
  def change
    add_column :shops, :longitude, :float
  end
end
