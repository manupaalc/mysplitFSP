class Api::GroupsController < ApplicationController

    

    def create
        @group = Group.new(group_params)
        if @group.save
            render :group_abrev
        else
            render json: { errors: @group.errors.full_messages}, status: 422
        end
    end

    private
    def group_params
        params.require(:group).permit(:name, :kind, :photo)
    end
end
