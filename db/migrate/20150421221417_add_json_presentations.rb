class AddJsonPresentations < ActiveRecord::Migration
  def change
    remove_column :products, :presentations
    add_column :products, :presentations, :json
  end
end
