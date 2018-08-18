class TablesController < ApplicationController
  before_action :authenticate_user!, only: [:cancel]

  def index
  end

  def tables
  end

  def sit
    if current_user
      if Chair.find_by_id(params[:chair_id]).update_attributes(user_id: current_user.id)
        render json: {success: true}
      else
        render json: {success: false, error: '1'}
      end
    else
      render json: {success: false, error: '0'}
    end
  end

  def cancel
    current_user.chair.update_attributes(user_id: nil)
    redirect_back(fallback_location: root_path)
  end
end