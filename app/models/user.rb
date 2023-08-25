class User < ApplicationRecord
    #shortcut to add a password reader, writer and validation
    #built in functionality for password_confirmation
    has_secure_password

    before_validation :ensure_session_token
    
    validates :username, presence: true,
     uniqueness: true, length: {in: 3..30},
     format: { without: URI::MailTo::EMAIL_REGEXP,
     message:  "can't be an email" }

    validates :email,
     presence: true, uniqueness: true,
      format: { with: URI::MailTo::EMAIL_REGEXP, message: "email is not correct" }

    validates :password, 
    length:{minimum: 6 }, 
     allow_nil: true

    has_many :group_users,
        dependent: :destroy
    
    has_many :groups,
        through: :group_users,
        source: :group
    
    has_many :expenses,
        foreign_key: :payer_id,
        dependent: :destroy
    
    has_many :split_expenses,
        foreign_key: :debtor_id,
        dependent: :destroy
    
    has_many :comments,
        dependent: :destroy
    
    has_many :friends,
        dependent: :destroy

    has_one_attached :photo,
        dependent: :destroy

    def user_photo_url
        if photo.attached?
            Rails.application.routes.url_helpers.rails_blob_path(photo, only_path: true)
        else
            nil
        end
    end
    

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.authenticate(password)
            user
        else
            nil
        end
    end

    def reset_session_token!
        self.session_token = generate_unique_token
        save!
        session_token
    end

    def ensure_session_token
        self.session_token ||= generate_unique_token
    end

    private
    def generate_unique_token
        loop do
            token = SecureRandom.urlsafe_base64
            return token unless User.exists?(session_token: token)
        end
    end
    
end
