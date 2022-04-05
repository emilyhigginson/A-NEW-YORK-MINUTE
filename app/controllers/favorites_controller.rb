class FavoritesController < ApplicationController
    before_action :set_spot

    def index 
        favorites = Favorite.where(user_id: params[:user_id])
        render json: favorites
    end

    def create
        @spot = Spot.find(params[:spot_id])
        like = Favorite.create(user_id: current_user.id, post_id: @spot.id)
        end
      end

    #   def destroy
    #     Favorite.where(favorited_id: @spot.id, user_id: current_user.id).first.destroy
    #     redirect_to @spot, notice: 'Spot unfavorited.'
    #   end

      private 
      def set_spot
        @spot = Spot.find(params[:spot_id] || params[:id])
      end
end
