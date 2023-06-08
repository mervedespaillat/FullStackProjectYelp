@reviews.each do |review|
    json.set! review.id do
      json.partial! 'reviews', review: review

      json.user_fname review.user.first_name
      json.user_lname review.user.last_name
      json.user_photo review.user.photo.url
    end
  end
  