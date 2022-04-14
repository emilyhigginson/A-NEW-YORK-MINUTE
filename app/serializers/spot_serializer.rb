class SpotSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :location, :category, :free, :reviews, :lat, :lng
end
