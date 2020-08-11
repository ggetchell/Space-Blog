class PostShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :story

  has_many :comments
end
