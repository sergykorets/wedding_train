class HelloWorldController < ApplicationController
  layout "hello_world"
  skip_before_action :verify_authenticity_token

  def index
  end

  def places
  end

  def reserve
    if Place.find_by_number(params[:place]).update_attributes(user_id: current_user.try(:id))
      render json: {success: true}
    else
      render json: {success: false}
    end
  end

  def cancel
    current_user.place.update_attributes(user_id: nil)
    redirect_back(fallback_location: root_path)
  end
end