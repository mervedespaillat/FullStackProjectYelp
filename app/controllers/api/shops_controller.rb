class Api::ShopsController < ApplicationController
    
    
    def show
        @shop = Shop.find(params[:id])
        render :show
    end

    def index
        @shops = Shop.all
        render :index
    end

    def recent3
            #datayi getir son 3 olacak sekilde 
        @shops = Shop.order(created_at: :desc).limit(3)
        render :index
    end

    def search
        query = params[:query].downcase
        # category = params[:category]&.downcase
        search_term = "%#{query}%"
        @shops = Shop.where("LOWER(name) LIKE ?", search_term)
        print (search_term)
        render :search
    end
    
end



# istenilen sorgulari actgive record ile alabilirim datadan
