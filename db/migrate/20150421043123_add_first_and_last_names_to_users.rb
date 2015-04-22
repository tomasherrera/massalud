class AddFirstAndLastNamesToUsers < ActiveRecord::Migration
  def change
    add_column :users, :first_name, :string, null: false, default: "Not"
    add_column :users, :last_name, :string, null: false, default: "Not Provided"
  end
end
