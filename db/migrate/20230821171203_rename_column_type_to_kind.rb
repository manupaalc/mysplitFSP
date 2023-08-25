class RenameColumnTypeToKind < ActiveRecord::Migration[7.0]
  def change
    rename_column :groups, :type, :kind
  end
end
