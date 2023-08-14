class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.references :expense, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.string :body, null: false
      t.timestamps
    end
    add_index :comments, [:expense_id, :user_id], unique: true
  end
end
