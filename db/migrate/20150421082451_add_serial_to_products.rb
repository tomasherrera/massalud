class AddSerialToProducts < ActiveRecord::Migration
  def change
    add_column :products, :serial, :string, null: false
  end
end
