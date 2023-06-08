class Shop < ApplicationRecord
    validates :name, :address, :city, :state, :zip_code, :phone_number, presence: true

    has_one_attached :photo

    has_many :reviews

    has_many :reviewers,
    through: :reviews,
    source: :user,
    dependent: :destroy

    def update_average_rating
        reviewers_count = reviewers.count
        #rails magic! update(attr:val) will update reviewers.rating =>0
        return update(rating: 0) if reviewers_count.zero?
        new_average = reviews.sum(:rating) / reviewers_count.to_f
        update(rating: new_average)
      end
end
