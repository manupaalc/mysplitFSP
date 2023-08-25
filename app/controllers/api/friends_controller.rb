class Api::FriendsController < ApplicationController

    def index
        user = User.find(params[:user_id])
        friends = user.friends.includes(:friend)
        rendered_friends = friends.as_json(
        include: { friend: { only: [:id, :username, :email], methods: [:user_photo_url] } }
        )
        render json: rendered_friends
  end
end
