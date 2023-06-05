class Api::ReviewsController < ApplicationController
    before_action :require_signed_in, only: [:destroy, :create, :edit]

    def new
        @review = Review.new
        render :new
    end

    # def create 
    #     @review = Review.new(review_params)
    #     @review.user_id = params[:user_id]

    #     if @review.save
          
    #     end
    # end


end