class RenameDescriptionToTypeAndAddNotNullConstraintToGroups < ActiveRecord::Migration[7.0]
  def change
    rename_column :groups, :description, :type
    change_column_null :groups, :type, false
  end
end
