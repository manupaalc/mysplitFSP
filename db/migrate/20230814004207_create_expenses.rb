class CreateExpenses < ActiveRecord::Migration[7.0]
  def change
    create_table :expenses do |t|
      t.references :payer, null: false, foreign_key: { to_table: :users }
      t.references :group, null: false, foreign_key: true
      t.string :name
      t.float :amount, null: false

      t.timestamps
    end
  end
end
