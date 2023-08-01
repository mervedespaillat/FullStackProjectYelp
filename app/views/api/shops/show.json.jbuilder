json.shop do
    json.extract! @shop, :id, :name, :address, :city, :state, :zip_code, :phone_number, :link, :opening_time, :closing_time, :latitude, :longitude, :rating
    json.photo @shop.photo.attached? ? url_for(@shop.photo) : nil
end


json.reviews do 
  @shop.reviews.each do |review|
      json.set! review.id do 
      json.extract! review, :body, :rating 
      end
    end
end