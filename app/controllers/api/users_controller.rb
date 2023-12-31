class Api::UsersController < ApplicationController

    wrap_parameters include: User.attribute_names + ['password']

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
          render json: {errors: @user.errors.full_messages}, status: 422  
        end
    end

    private
    def user_params
        #frontend ideally wants to dispatch {username: 'name', password: 'possword'}
        #backend expects {user:{username: 'name, password: 'password'}}
        params.require(:user).permit(:email, :username, :password)
    end

end
