class Api::GroupsController < ApplicationController

    

    def create
        @group = Group.new(group_params)
        if @group.save
            # @group.users << group_params[:user_ids].map {|id|User.find(id)} if group_params[:user_ids].present?
            group_params[:user_ids].each do |id|
                GroupUser.create(user_id: id, group_id: @group.id)
            end
            render :group_abrev
        else
            render json: { errors: @group.errors.full_messages}, status: 422
        end
    end

  def index
  user = User.find(params[:user_id])
  groups = user.groups.includes(:group_users)

  rendered_groups = groups.as_json(
    methods: [:group_photo_url],
    include: { group_users: { only: [:user_id] } }
  )

  render json: rendered_groups
end

    private
    def group_params
        params.require(:group).permit(:name, :kind, :photo, user_ids: [])
    end
end
