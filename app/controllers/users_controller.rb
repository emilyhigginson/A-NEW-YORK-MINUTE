class UsersController < ApplicationController

    def index 
        users = User.all
        render json: users, status: :ok 
    end

    # def show 
    #     user = current_user
        
    #     render json: [user]
    # end

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