@reviews.each do |review|
    json.set! review.id do
      json.partial! 'reviews', review: review

      json.user_fname review.user.first_name
      json.user_lname review.user.last_name
      json.user_id review.user.id
      json.user_photo review.user.photo.url
    end
  end
  
   # @reviews.each do |review|
  #   json.set! review.id.to_s do
  #     json.id review.id
  #     json.rating review.rating
  #     json.shop_id review.shop.id
  #     json.user_id review.user.id
  #     json.body review.body
  
  #     json.extract! review.user, :first_name, :last_name
  #   end
  # end