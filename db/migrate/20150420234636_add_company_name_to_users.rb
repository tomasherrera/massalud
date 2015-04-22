class AddCompanyNameToUsers < ActiveRecord::Migration
  def change
    add_column :users, :company_name, :string, :null => false, :default => "not_provided"
    add_column :users, :company_id, :integer, :null => false
  end
end
