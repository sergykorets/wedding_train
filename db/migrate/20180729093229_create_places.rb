class CreatePlaces < ActiveRecord::Migration[5.1]
  def change
    create_table :places do |t|
      t.integer :number
      t.integer :user_id
    end
  end
end
