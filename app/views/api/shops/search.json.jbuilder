# @shops.each do |shop|
#     json.set! shop.id do
#       json.extract! shop, :id, :name, :address, :city, :state, :zip_code, :phone_number, :price_range, :longitude, :latitude, :opening_time, :closing_time, :link
#       json.photo (shop.photo.attached? ? url_for(shop.photo) : nil)
#     end
#   end

# json.set! shop.id do
#     json.extract! shop, :id, :address, :city, :state, :zip_code, :phone_number, :price_range, :longitude, :latitude, :opening_time, :closing_time
#     json.name shop.name
#     json.relative_url shop_path(shop)
#     json.photo (shop.photo.attached? ? url_for(shop.photo) : nil)
#   end

json.array! @shops do |shop|
    json.set! shop.id do
      json.extract! shop, :id, :name, :address, :city, :state, :zip_code, :phone_number, :price_range, :longitude, :latitude, :opening_time, :closing_time, :link
      json.photo shop.photo.attached? ? url_for(shop.photo) : nil
      json.photo_url shop.photo.attached? ? url_for(shop.photo) : nil
    end
  end