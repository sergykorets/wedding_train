class CreateChairs < ActiveRecord::Migration[5.1]
  def change
    create_table :chairs do |t|
      t.integer :number
      t.integer :user_id
      t.integer :table_id
    end
  end
end
