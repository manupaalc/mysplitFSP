class Api::FriendsController < ApplicationController

    def index
        user = User.find(params[:user_id])
        friends = user.friends.includes(:friend)
        render json: friends, include: {friend: {only:[:id, :username, :email]}}
    end
end
