class UpdateShops < ActiveRecord::Migration[7.0]
  def change
    add_column :shops, :opening_time, :integer
    add_column :shops, :closing_time, :integer
  end
end
