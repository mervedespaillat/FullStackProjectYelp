json.user do
    json.extract! @user, :id, :first_name, :last_name, :photo, :created_at
          # json.user_fname review.user.first_name
      # json.user_lname review.user.last_name
      # json.user_photo review.user.photo.url
    json.photo @user.photo.attached? ? url_for(@user.photo) : nil
end
