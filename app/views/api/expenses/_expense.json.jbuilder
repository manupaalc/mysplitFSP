json.extract! expense, :id, :name, :group_id, :payer_id, :amount
json.photo_url expense.photo.attached? ? url_for(expense.photo) : nil