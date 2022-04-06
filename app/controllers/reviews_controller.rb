class ReviewsController < ApplicationController

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
