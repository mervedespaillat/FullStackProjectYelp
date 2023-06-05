class DataTypeForPriceInShops < ActiveRecord::Migration[7.0]
  def change
  add_column :shops, :price_range, :integer
  end
end
