class CreateSplitExpenses < ActiveRecord::Migration[7.0]
  def change
    create_table :split_expenses do |t|
      t.references :expense, null: false, foreign_key: true
      t.references :debtor, null: false, foreign_key: { to_table: :users }
      t.float :amount, null: false
      t.timestamps
    end
    add_index :split_expenses, [:expense_id, :debtor_id], unique: true
  end
end
