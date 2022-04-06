class FavoritesController < ApplicationController

    def index 
        favorites = Favorite.all
        render json: favorites
    end

    def show 
      favorite = Favorite.find(params[:id])
      render json: favorite, status: :ok
  end

    def create
        favorite = Favorite.create(favorite_params)
        if favorite.valid?
        render json: favorite, status: :created
        else 
            render json: {errors: favorite.errors.full_messages}, status: :unprocessable_entity
        end
      end

    def destroy 
    favorite = Favorite.find(params[:id])
    favorite.destroy 

    head :no_content

end

      private 
      def favorite_params 
        params.permit(:id, :user_id, :spot_id, :favorite)
      end
end
