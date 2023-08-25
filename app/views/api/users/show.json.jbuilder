json.user do
    json.extract! @user, :id, :username, :email, :created_at
    json.photo_url @user.photo.attached? ? url_for(@user.photo) : nil 
end