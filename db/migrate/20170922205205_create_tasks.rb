class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.integer :list_id
      t.date :due
      t.string :reward
      t.boolean :completed, null: false, default: false

      t.timestamps
    end
    add_index :tasks, :list_id, unique: true
  end
end
