class User < ApplicationRecord
    
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true

    has_many :group_users,
        dependent: :destroy
    
    has_many :groups,
        through: :group_users
    
    has_many :expenses,
        foreign_key: :payer_id,
        dependent: :destroy
    
    has_many :expense_splits,
        foreign_key: :debtor_id,
        dependent: :destroy
    
    has_many :comments,
        dependent: :destroy
    
    has_many :friends,
        dependent: :destroy
end
