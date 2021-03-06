class WeddingController < ApplicationController
  before_action :authenticate_user!, only: :attend

  def index
  end

  def guests
    render json: { attended: current_user.try(:attend),
                   attendedUsers: User.where(attend: true, admin: false).sort_by {|u| u.name.length}.map {|user| {id: user.id, name: user.name, avatar: user.remote_avatar_url}},
                   notAttendedUsers: (User.all - User.joins(:chair)).map {|user| !user.chair && {name: user.name, avatar: user.remote_avatar_url}}}
  end

  def attend
    current_user.update_attributes(attend: true)
    render 'wedding/index'
  end
end