json.shop do
    json.extract! @shop, :id, :name, :created_at
    json.photo @shop.photo.attached? ? url_for(@shop.photo) : nil
end


json.reviews do 
  @shop.reviews.each do |review|
      json.set! review.id do 
      json.extract! review, :body, :rating 
      end
    end
end