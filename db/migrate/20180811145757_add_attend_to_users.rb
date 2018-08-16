class AddAttendToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :attend, :boolean, default: false
  end
end