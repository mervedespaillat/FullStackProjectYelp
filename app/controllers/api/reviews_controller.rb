class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, only: [:destroy, :create, :edit]
    #protect_from_forgery with: :null_session

    def new
        @review = Review.new
        render :new
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end

    def index
        @shop = Shop.find(params[:shop_id])
        @reviews = @shop.reviews 
        render :index
    end

    def user_reviews 
        @user = current_user
        @reviews = @user.reviews
        render :index
    end


    def create 
        
        @review = Review.new(review_params)
        @review.user_id = current_user.id
        if @review.save
            # @review.shop.update_avg_rating
            render :show
        else
            render json: {errors: @review.errors.full_messages} , status: :unprocessable_entity
        end
    end


    def edit
         @review = Review.find(params[:id])
        if @review.update
            render :show
        else
            render json: @review.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy
        head :no_content
    end


    def recent_reviews
            #datayi getir son 3 olacak sekilde 
        @reviews = Review.order(created_at: :desc).limit(3)
        render :index
    end


    private

    def review_params
        params.require(:reviews).permit(:shop_id, :user_id, :body, :rating)
    end

end