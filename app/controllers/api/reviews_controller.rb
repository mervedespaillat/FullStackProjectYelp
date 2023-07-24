class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, only: [:destroy, :create, :update]
    #protect_from_forgery with: :null_session

    def new
        @review = Review.new
        render :new
    end

    def show
        @shop = Shop.find(params[:shop_id])
        @review = Review.find(params[:id])
        user_id = 1
        shop_id = params[:shop_id]
        exist_review = Review.find_by(user_id: user_id, shop_id: shop_id )
        if exist_review
            @review.update(isItAReview: true)
        else
            @review.update(isItAReview: false)

        end 
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

    # isItAReview: bool

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


    def update
        
         @review = Review.find(params[:id])
        if @review && @review.update(review_params)
            
            render :show
        else
            render json: @review.errors.full_messages, status: 422
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
        params.require(:review).permit(:shop_id, :user_id, :body, :rating)
    end

end
