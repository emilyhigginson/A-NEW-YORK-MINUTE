class UsersController < ApplicationController

    def index 
        users = User.all
        render json: users, status: :ok 
    end

    def show 
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      
end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def me
        render json: current_user, status: :ok
    end

    private

    def user_params
        params.permit(:username, :password, :email, :avatar)
    end

end