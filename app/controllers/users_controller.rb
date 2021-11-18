class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
      users = User.all
      render json: users
    end
  
    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created, serializer: UserDetailsSerializer
    end
  
    def show
      render json: @current_user, serializer: UserDetailsSerializer
    end
  
    private
  
    def user_params
      params.permit(:username, :password, :password_confirmation, :image_url)
    end
  
  end