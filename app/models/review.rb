class Review < ApplicationRecord
    validates :body, :rating, presence: true
    validates :body, length: {minimum: 10}

    belongs_to :shop
    belongs_to :user

    has_one_attached :photo
    # has_many_attached :images
    private

    def update_average_rating
      shop.update_average_rating
    end
  
end