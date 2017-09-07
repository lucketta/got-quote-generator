class ProfilesController < ApplicationController
  def index
    profiles = Profile.all
    render json: profiles
  end

  def destroy
    render json: {id: params[:id]}
  end
end
