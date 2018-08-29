class CreateGifts < ActiveRecord::Migration[5.1]
  def change
    create_table :gifts do |t|
      t.integer :user_id
      t.integer :coupon_id
      t.integer :state
    end
  end
end
