json.user do
    json.extract! @user, :id, :first_name, :created_at
    json.photo @user.photo.attached? ? url_for(@user.photo) : nil

end
