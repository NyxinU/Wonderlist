class RemoveIndex < ActiveRecord::Migration[5.1]
  def change
    remove_index :tasks, column: :list_id
  end
end
