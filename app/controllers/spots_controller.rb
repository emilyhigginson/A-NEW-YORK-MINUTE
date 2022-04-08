class SpotsController < ApplicationController

    def index 
        spots = Spot.all
        render json: spots, status: :ok
    end

    def show 
        spot = Spot.find(params[:id])
        render json: spot, status: :ok
    end

    def create 
        spot = Spot.create!(spot_params)
        render json: spot, status: :created
    end

    private 

    def spot_params
        params.permit(:name, :location, :category, :image, :review)
    end
end
