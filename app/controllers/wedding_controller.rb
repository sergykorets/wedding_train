class WeddingController < ApplicationController
  before_action :authenticate_user!, only: :attend

  def index
  end

  def guests
    render json: {attended: current_user.try(:attend)}
  end

  def attend
    current_user.update_attributes(attend: true)
    render 'wedding/index'
  end
end