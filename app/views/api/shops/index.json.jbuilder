@shops.each do |shop|
    json.set! shop.id do
        json.extract! shop, :id, :name, :address, :city, :state, :zip_code, :phone_number, :link, :opening_time, :closing_time
    end
end
