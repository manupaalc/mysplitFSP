class Expense < ApplicationRecord

    validates :amount, presence: true

    belongs_to :payer,
        class_name: 'User'
    
    belongs_to :group

    has_many :split_expenses,
        dependent: :destroy
    
    has_many :comments,
        dependent: :destroy

    has_one_attached :photo
end
