json.user do
    json.extract! @user, :id, :first_name, :created_at
end
