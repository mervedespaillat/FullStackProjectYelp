class AddToShops < ActiveRecord::Migration[7.0]
  def change
    add_columns :shops, :rating, type: :float 
  end
end
