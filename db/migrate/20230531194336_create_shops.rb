class CreateShops < ActiveRecord::Migration[7.0]
  def change
    create_table :shops do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null:false
      t.string :state, null:false
      t.string :zip_code, null: false 
      t.string :link 
      t.string :price_range
      t.string :phone_number, null: false
       t.timestamps
    end
    add_index :shops, :name
    end
end
