class Api::GroupsController < ApplicationController

    before_action :require_login

    def create
        group = current_user.groups.new(group_params)
        if group.save
            rende
    end

    private
    def group_params
        params.require(:group).permit(:name, :type, group_user_atrributes:[:user_id])
    end
end
