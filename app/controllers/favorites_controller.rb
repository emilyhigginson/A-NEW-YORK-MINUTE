class FavoritesController < ApplicationController

    def index 
        favorites = Favorite.where(user_id: params[:user_id])
        render json: favorites
    end

    def create
        favorite = Favorite.create(favorite_params)
        if favorite.valid?
        render json: favorite, status: :created
        else 
            render json: {errors: favorite.errors.full_messages}, status: :unprocessable_entity
        end
      end

    #   def destroy
    #     Favorite.where(favorited_id: @spot.id, user_id: current_user.id).first.destroy
    #     redirect_to @spot, notice: 'Spot unfavorited.'
    #   end

      private 
      def favorite_params 
        params.permit(:id, :user_id, :spot_id, :favorite)
      end
end
