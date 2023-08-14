class Expense < ApplicationRecord

    validates :amount, presence: true

    belongs_to :payer,
        class_name: 'User'
    
    belongs_to :group

    has_many :expense_splits,
        dependent: :destroy
    
    has_many :comments,
        dependent: :destroy
end
