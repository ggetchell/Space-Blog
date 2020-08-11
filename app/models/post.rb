class Post < ApplicationRecord

  validates :title, presence: true
  validates :story, presence: true
  
  has_many :comments, dependent: :destroy
  belongs_to :user 
end