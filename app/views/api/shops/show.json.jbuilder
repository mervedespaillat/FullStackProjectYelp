json.shop do
    json.extract! @shop, :id, :name, :created_at
    json.photo @shop.photo.attached? ? url_for(@shop.photo) : nil
end
