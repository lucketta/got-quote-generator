class ProfilesController < ApplicationController
  def index
    profiles = Profile.all
    render json: profiles
  end

  def destroy
    profile = Profile.find_by(name: params[:name])
    profile.delete
  end
end
