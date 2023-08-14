class SplitExpense < ApplicationRecord

    validates_uniqueness_of :debtor_id, scope: :expense_id

    belongs_to :debtor,
        class_name: 'User'

    belongs_to :expense
end
