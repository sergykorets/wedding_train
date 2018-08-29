class Gift < ApplicationRecord
  belongs_to :coupon
  belongs_to :user
  validates_uniqueness_of :user_id, scope: :coupon_id


  enum state: [:created, :gifted, :completed]
end