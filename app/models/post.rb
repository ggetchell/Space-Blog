class Post < ApplicationRecord

  validates :title, presence: true
  validates :story, presence: true
  
  has_many :comments
end