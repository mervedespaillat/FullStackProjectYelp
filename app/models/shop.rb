class Shop < ApplicationRecord
    validates :name, :address, :city, :state, :zip_code, :phone_number, presence: true

    has_one_attached :photo

    

    has_many :reviews,
    class_name: :Reviews,
    foreign_key: :shop_id,
    dependent: :destroy

    has_many :reviewers,
    through: :reviews,
    source: :user,
    dependent: :destroy

    # def update_average_rating
    #     total_reviewers = reviewers.count

    # end burada ortama puanlamayi ayaralayabilirim

end
