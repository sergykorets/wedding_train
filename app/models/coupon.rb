class Coupon < ApplicationRecord
  has_many :gifts, :dependent => :delete_all
  has_many :users, through: :gifts
  validate :validate_coupons

  def validate_coupons
    errors.add(:coupon, "too much") if gifts.size > 1
  end
end