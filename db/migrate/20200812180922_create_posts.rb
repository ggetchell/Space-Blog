class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.text :story, null: false
      t.belongs_to :user, null: false

      t.timestamps
    end
  end
end