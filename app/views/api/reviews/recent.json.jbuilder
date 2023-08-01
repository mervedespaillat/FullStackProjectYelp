
@reviews.each do |review|
    json.set! review.id.to_s do
      json.id review.id
      json.rating review.rating
      json.shop_id review.shop.id
      json.shop_name review.shop.name
      json.user_id review.user.id
      json.body review.body
      json.extract! review.user, :first_name, :last_name
      json.user_photo review.user.photo.url
      json.shop_photo review.shop.photo.url

    end
  end