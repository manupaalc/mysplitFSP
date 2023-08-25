class Group < ApplicationRecord

    validates :name, presence: true

    has_many :group_users,
        dependent: :destroy
    
    has_many :users,
        through: :group_users,
        source: :user

    has_many :expenses,
        dependent: :destroy

    has_one_attached :photo

    def group_photo_url
        if photo.attached?
            Rails.application.routes.url_helpers.rails_blob_path(photo, only_path: true)
        else
            nil
        end
    end
end
