class Review < ApplicationRecord
    validates :body, :rating, presence: true

    belongs_to :shop
    belongs_to :user

    has_one_attached :photo
    has_many_attached :images
    
end