class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :name
      t.string :contact_email
      t.string :image

      t.timestamps
    end
  end
end
