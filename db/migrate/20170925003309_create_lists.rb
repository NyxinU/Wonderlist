class CreateLists < ActiveRecord::Migration[5.1]
  def change
    create_table :lists do |t|
      t.string :title, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :lists, :author_id, unique: true
  end
end
