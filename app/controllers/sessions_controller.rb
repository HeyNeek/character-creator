class SessionsController < ApplicationController
    #/login

    skip_before_action :authorize, only: :create

    def create
        user = User.find_by(username: params[:username])
        if user && user.password_digest == params[:password]
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end
    #/logout
    def destroy
        session.delete :user_id
        head :no_content
    end
end