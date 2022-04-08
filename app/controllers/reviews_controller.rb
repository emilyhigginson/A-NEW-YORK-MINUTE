class ReviewsController < ApplicationController

    def index 
        reviews = Review.all
        render json: reviews
    end
    
    def show 
        review = Review.find(params[:id])
        render json: review, status: :ok
    end

    def create 
        review = Review.create(review_params)
        if review.valid?
        render json: review, status: :created
        else 
            render json: {errors: review.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private 

    def review_params
        params.permit(:comment, :user_id, :spot_id)
    end
end
