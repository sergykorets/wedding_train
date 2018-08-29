class CouponsController < ApplicationController
  before_action :authenticate_user!, only: [:my_coupons]

  def index
  end

  def guests
    render json: { guests: User.where(attend: true, admin: false).sort_by {|u| u.name.length}.map {|user| {id: user.id, name: user.name, avatar: user.remote_avatar_url}}}
  end

  def my_coupons
  end

  def get_coupons
    render json: { coupons: current_user.coupons.map {|coupon| {name: coupon.name, number: coupon.number, image: coupon.image}}}
  end

  def register_gift
    coupon = Coupon.find_by_number(params[:number])
    if coupon.gifts.count > 1
      render json: {success: false}
    else
      coupon.gifts.create(user_id: params[:user_id], state: 1)
      render json: {success: true}
    end
  end
end