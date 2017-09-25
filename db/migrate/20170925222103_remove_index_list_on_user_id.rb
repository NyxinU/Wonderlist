class RemoveIndexListOnUserId < ActiveRecord::Migration[5.1]
  def change
    remove_index :lists, :user_id
  end
end
