class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, only: [:destroy, :create, :update]
    protect_from_forgery with: :null_session

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
            @review = Review.new(review_create_params)
            print @review
            debugger
            @review.user_id = current_user.id
            
            if @review.save
                debugger
                @review.shop.update_average_rating
                render :show
            else
                render json: {errors: @review.errors.full_messages} , status: :unprocessable_entity
            end
        end
        # def create
        #     @review = Review.new
        #     @review.shop_id = params[:review][:shop_id]
        #     @review.user_id = params[:review][:user_id]
        #     @review.rating = params[:review][:rating]
        #     @review.body = params[:review][:body]
           
        #     if @review.save
        #       @review.shop.update_average_rating
        #       render :show
        #     else
        #       render json: @review.errors.full_messages, status: 422
        #     end
        #   end

    def update
        
         @review = Review.find(params[:id])
         debugger
        if @review && @review.update(review_params)
            debugger
            @review.shop.update_average_rating

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
        @reviews = Review.order(created_at: :desc).limit(3).includes(:shop, :user) # Eager load the associated shop details
        render :index
      end
 
    #   def recent_reviews
    #     @reviews = Review.order(created_at: :desc).limit(3).includes(:shop, :user) # Eager load the associated shop details
    #     render json: @reviews, include: { shop: { only: [:id, :name, :address] }, user: { only: [:id, :username] } }
    #   end
      

    private

    def review_params
        params.require(:review).permit(:shop_id, :user_id, :body, :rating)
     end
    def review_create_params
        params.require(:reviews).permit(:shop_id, :user_id, :body, :rating)
     end

end
