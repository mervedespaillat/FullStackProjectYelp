class CreateRewies < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :rating, null: false
      t.bigint :shop_id, null: false
      t.bigint :user_id, null:false
      t.timestamps
    end
    add_index :reviews, [:shop_id, :user_id], unique: true
    add_foreign_key :reviews, :shops, column: :shop_id
    add_foreign_key :reviews, :users, column: :user_id
  end
end
