class ChangeDataTypeForPriceInShops < ActiveRecord::Migration[7.0]
  def change
    remove_column :shops, :price_range
  end
end
